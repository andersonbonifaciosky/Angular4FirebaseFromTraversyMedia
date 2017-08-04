import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import {FirebaseService} from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'add-listing',
    component: AddListingComponent
  },
  {
    path: 'listing/:id',
    component: ListingComponent
  },
  {
    path: 'edit-listing/:id',
    component: EditListingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    FlashMessagesModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
