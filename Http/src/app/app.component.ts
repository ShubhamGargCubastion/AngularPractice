import { Component } from '@angular/core';
import {ServerService} from "./server.service";
import { Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      server_id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      server_id: this.generateId()
    }
  ];

  createdServer: {name: string, capacity: number, server_id: number};
  updatedServer: {id:number,name: string, capacity: number};


  constructor(private serverService: ServerService){}

  onSave(name:string,capacity:number) {

    this.createdServer = {name: name, capacity: +capacity, server_id: this.generateId()};
    this.serverService.storeServers(this.createdServer)
      .subscribe(
        (response) => {
          console.log(response);
          },
      (error) => console.log(error)
      );
  }
  onGetServer() {
    this.serverService.getServers()
      .subscribe(
        (servers:any[]) => {
          console.log(servers);
        },
        (error) => console.log(error)
      );
  }

  onUpdate(id:number,name:string,capacity:number) {
    this.updatedServer = {id:+id,name: name, capacity: +capacity};
    this.serverService.updateServer(this.updatedServer)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
  }
  onDelete(id:number) {
    this.serverService.deleteServer(+id)
      .subscribe(
        (response) => {
          console.log('Server Deleted');
        },
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
