import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

 @Input() postsTitle: string;
 @Input() postsContent: string;
 @Input() loveIts: number;
 @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }
dontLoveIt(){
this.loveIts--;
}
loveIt(){
this.loveIts++;
}
}
