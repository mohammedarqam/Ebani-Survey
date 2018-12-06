import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController,IonicPage, LoadingController, Platform } from 'ionic-angular';
import * as firebase from 'firebase';
import { ThanksPage } from '../thanks/thanks';
import { Slides } from 'ionic-angular';
import moment from 'moment';
import { MobileThanksPage } from '../mobile-thanks/mobile-thanks';

@IonicPage()
@Component({
  selector: 'page-mobile-home',
  templateUrl: 'mobile-home.html',
})
export class MobileHomePage {

  @ViewChild(Slides) slides: Slides;
  //slide 0
  cname: string;
  bdname: string;
  //slide 1
  s1Rate: string;
  s1Comm: string;
  //slide 2
  s2Rate1: string;
  s2Rate2: string;
  //slide 3
  s3Rate1: string;
  s3Rate2: string;
  s3Rate3: string;
  //slide 4
  s4Rate1: string;
  s4Rate2: string;

  plat : string = "Unknown";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public plt : Platform,
    public loadingCtrl : LoadingController,
  ) {
    if(this.plt.is('core')){
      this.plat = "Desktop";
    }
    if(this.plt.is('mobileweb')){
      this.plat = "Mobile";
    }
    console.log(this.plat);
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }





  checkSlide0() {
    if (this.cname) {
      if (this.bdname) {
        this.gtNext();
      } else { this.presentToast("Select who you are serviced by") }
    } else { this.presentToast("Select your Company") }
  }

  checkSlide1() {
    if (this.s1Rate) {
      this.gtNext();
    } else { this.presentToast("Select your Satisfaction ") }
  }
  checkSlide2() {
    if (this.s2Rate1) {
      if (this.s2Rate2) {
        this.gtNext();
      } else { this.presentToast("Select your Satisfaction ") }
    } else { this.presentToast("Select your Satisfaction ") }
  }
  checkSlide3() {
    if (this.s3Rate1) {
      if (this.s3Rate2) {
        if (this.s3Rate3) {
          this.gtNext();
        } else { this.presentToast("Select your Satisfaction ") }
      } else { this.presentToast("Select your Satisfaction ") }
    } else { this.presentToast("Select your Satisfaction ") }
  }

  checkSlide4() {
    if (this.s4Rate1) {
      if (this.s4Rate2) {
          this.submi();
      } else { this.presentToast("Select your Satisfaction ") }
    } else { this.presentToast("Select your Satisfaction ") }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: "bottom",
      showCloseButton: true,
    });
    toast.present();
  }

  gtNext() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  gtThanks() {
    this.navCtrl.setRoot(MobileThanksPage);
  }
  submi(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    firebase.database().ref("Responses").push({
      Client : this.cname,
      Agent : this.bdname,
      Q1 : this.s1Rate,
      Q2 : this.s1Comm,
      Q3 : this.s2Rate1,
      Q4 : this.s2Rate2,
      Q5 : this.s3Rate1,
      Q6 : this.s3Rate2,
      Q7 : this.s3Rate3,
      Q8 : this.s4Rate1,
      Q9 : this.s4Rate2,
      Platform : this.plat,
      TimeStamp : moment().format()
    }).then(()=>{
      loading.dismiss();
      this.gtThanks();
    })
  }
}
