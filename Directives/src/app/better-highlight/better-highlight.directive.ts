import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  //another way to change background color, takes property to be changed of hosting element

  @HostBinding('style.backgroundColor')  backgroundColor: string;
  @HostBinding('style.color')  color: string = 'black';


  constructor(private eleRef: ElementRef,private renderer: Renderer2) { }

    ngOnInit() {
    //  this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')
    this.backgroundColor = this.defaultColor;
    }


    @HostListener('mouseenter') mouseover(eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
      // this.renderer.setStyle(this.eleRef.nativeElement,'color','white');
      this.backgroundColor = this.highlightColor;
      this.color = 'white';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
      // this.renderer.setStyle(this.eleRef.nativeElement,'color','black');
      // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
      this.backgroundColor = this.defaultColor;
      this.color = 'black';
    }

}


