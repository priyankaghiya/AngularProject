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
  serverCreationStatus =" No server created";
  username = '';
  serverName = '';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreatedServer(){
    this.serverCreationStatus="Server Created Successfully Of Name "+this.serverName;
  }

  serverNameUpdate(event:Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;


  }

}
