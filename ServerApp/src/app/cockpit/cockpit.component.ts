import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
    // newServerName= '';
    //newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput: ElementRef;    //local reference inside ViewChild()
  constructor() { }

  ngOnInit() {
  }

  onAddServer(NameInput: HTMLInputElement) {
    this.serverCreated.emit({
      //    serverName:this.newServerName,
      serverName:NameInput.value,
//        serverContent:this.newServerContent
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(NameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
  //    serverName:this.newServerName,
        serverName:NameInput.value,
//      serverContent:this.newServerContent
        serverContent:this.serverContentInput.nativeElement.value
      });
  }

}
