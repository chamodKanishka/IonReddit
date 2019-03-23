import { Component } from '@angular/core';
import { RedditsPage } from '../reddits/reddis';
import { SettingsPage } from '../settings/settings';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Root: any = RedditsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = Tab3Page;

  constructor(){

  }
}
