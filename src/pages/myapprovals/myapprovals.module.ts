import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyapprovalsPage } from './myapprovals';

@NgModule({
  declarations: [
    MyapprovalsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyapprovalsPage),
  ],
})
export class MyapprovalsPageModule {}
