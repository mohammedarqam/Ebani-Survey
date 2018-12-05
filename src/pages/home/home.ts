import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { ThanksPage } from '../thanks/thanks';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cname : string;
  bdname : string;
  scndLevel : string;
  scndDes : string;

  constructor(
  public navCtrl: NavController
  ) {
  }


  gtThanks(){
    this.navCtrl.setRoot(ThanksPage);
  }

}
