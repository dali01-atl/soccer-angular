import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent implements OnInit {

  constructor() { }
  @Input() x: any;
  ngOnInit() {
  }

}
