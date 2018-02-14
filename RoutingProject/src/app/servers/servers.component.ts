import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
               private router: Router,
                private route: ActivatedRoute) { }    //injects currently activated route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
      this.router.navigate(['/servers'],{relativeTo: this.route})   /*if we remove relativeTo property then
                                                                      navigate function don't know current path so
                                                                        everything will work fine */

  }

}
