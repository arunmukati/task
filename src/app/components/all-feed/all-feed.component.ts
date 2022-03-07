import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-all-feed',
  templateUrl: './all-feed.component.html',
  styleUrls: ['./all-feed.component.scss']
})
export class AllFeedComponent implements OnInit {
  feeds = [];
  channel = new BroadcastChannel('channel-new-feed');
  constructor(private changeDetection: ChangeDetectorRef){}
  ngOnInit(): void {
    this.getAllFeeds();
    this.channel.onmessage= (feed)=>{
      this.feeds.push(feed.data);
      this.changeDetection.detectChanges();
    } 
  }
  getAllFeeds() {
    let storageFeeds = localStorage.getItem('all-feeds');
    this.feeds= JSON.parse(storageFeeds);
  }

  
}
