import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-feed',
  templateUrl: './all-feed.component.html',
  styleUrls: ['./all-feed.component.scss']
})
export class AllFeedComponent implements OnInit {
  feeds = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllFeeds();
    window.addEventListener('storage',()=>{
      this.getAllFeeds();
    })
    
  }
  getAllFeeds() {
    let storageFeeds = localStorage.getItem('all-feeds');
    this.feeds= JSON.parse(storageFeeds);
  }


}
