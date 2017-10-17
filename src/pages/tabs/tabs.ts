import { Component } from '@angular/core';

import { WalkthroughPage } from '../walkthrough/walkthrough';
import { MyapprovalsPage } from '../myapprovals/myapprovals';
import { SettingsPage }  from '../settings/settings'
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WalkthroughPage;
  tab3Root = MyapprovalsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
