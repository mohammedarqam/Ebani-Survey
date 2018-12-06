import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MobileHomePage } from '../pages/mobile-home/mobile-home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if(this.platform.is('core')){
        this.rootPage = HomePage;
      }
      if(this.platform.is('mobileweb')){
        this.rootPage = MobileHomePage;
      }
        statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

