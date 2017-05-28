import { Component } from '@angular/core';

import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditsPage;
  tab3Root = SettingsPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
