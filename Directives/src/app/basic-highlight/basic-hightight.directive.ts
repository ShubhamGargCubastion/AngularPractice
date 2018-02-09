import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

      constructor(private elementRef: ElementRef) {
                                                                // to access element where we place our directive
      }

      ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
      }
}
