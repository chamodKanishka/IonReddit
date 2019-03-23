import { Component } from '@angular/core';
import { RedditService } from '../services/reddit.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController,/**private redditService: RedditService*/){

  }

  ngOnInit(){
   console.log('onInit ran...');
  }

  /**getPosts(category, limit){
    this.redditService.getPosts(category,limit).subscribe(response => {
      console.log(response)
    });

  }*/
}
