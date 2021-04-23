import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverId: number = 10;
  serverStatus: string = 'offline';
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  // serverName = 'Twst';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.allowNewServer = true;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    //this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

   
  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewServer = true;
  //   }, 2000);
  // }

  // onUpdateServerName(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
