import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileHomePage } from './mobile-home';

@NgModule({
  declarations: [
    MobileHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MobileHomePage),
  ],
})
export class MobileHomePageModule {}
