import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ThanksPage } from '../pages/thanks/thanks';


export const firebaseCred = {
  apiKey: "AIzaSyDCES9tQHEU81poCBxTkcxOHe7ENgEUDhM",
  authDomain: "ebani-survey.firebaseapp.com",
  databaseURL: "https://ebani-survey.firebaseio.com",
  projectId: "ebani-survey",
  storageBucket: "",
  messagingSenderId: "803503781446"
};
firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ThanksPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false
    }),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ThanksPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
