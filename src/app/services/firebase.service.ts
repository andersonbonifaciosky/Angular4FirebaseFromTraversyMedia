import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private db: AngularFireDatabase) {
    this.folder = 'listingimages';
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
  }
  getListings() {
    return this.listings;
  }

  getListingDetails(id) {
    this.listing = this.db.object('/listings/' + id) as FirebaseObjectObservable<Listing>;
    return this.listing;
  }

  addListing(listing) {
    const storageRef = firebase.storage().ref();
    for (const selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      const path = `/${this.folder}/${selectedFile.name}`;
      const iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

  updateListing(id, listing) {
    return this.listings.update(id, listing);
  }

  deleteListing(id) {
    return this.listings.remove(id);
  }
}

interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
