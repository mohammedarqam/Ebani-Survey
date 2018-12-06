import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileThanksPage } from './mobile-thanks';

@NgModule({
  declarations: [
    MobileThanksPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileThanksPage),
  ],
})
export class MobileThanksPageModule {}
