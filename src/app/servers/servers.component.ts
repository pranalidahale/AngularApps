import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
servername= '';
serversuccess ='No servers created!'
serverCount =0;
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  getServerName(event:Event){
    this.servername=(<HTMLInputElement>event.target).value;
  }
  onCreateNewServer(){
    this.serverCount++;
    this.serversuccess=this.serverCount + "servers created!"
  }
}
