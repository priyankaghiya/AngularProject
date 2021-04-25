import { Component, OnInit } from '@angular/core';

@Component({
  //this is a tag // selector: 'app-servers', 
  // this is an attribute 
//  selector: '[app-servers]',
  // this is a class
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

}
