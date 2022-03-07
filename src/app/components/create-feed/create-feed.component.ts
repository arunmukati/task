import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.scss']
})
export class CreateFeedComponent implements OnInit {
  feedForm = new FormGroup({
    title: new FormControl(''),
    message: new FormControl(''),
  });
  channel = new BroadcastChannel('channel-new-feed');
  sendFeedFlag = ''
  constructor() { }

  ngOnInit(): void {
  }
  sendFeed(){
    if(this.feedForm.value.title==''){
      return;
    }
    let storageFeeds:any = localStorage.getItem('all-feeds');
    let obj = {
      ...this.feedForm.value,
      time: new Date().toISOString()
    };
    let array=[];
    if(storageFeeds){
      array = JSON.parse(storageFeeds);
      let index = array.findIndex(el=>el['title'] == obj.title )
      if(index>=0){
        this.showMsg('error');
        return
      }
    }
    array.push(obj)
    localStorage.setItem('all-feeds', JSON.stringify(array))
    this.showMsg('success');
    this.channel.postMessage(obj);
  }
  showMsg(msg){
    this.sendFeedFlag = msg;
   setTimeout(() => {
     this.sendFeedFlag = '';
   }, 2000);
  }
}
