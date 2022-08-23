import { Directive, ElementRef, Input,  Renderer2,  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelayElement]'
})
export class DelayElementDirective {

  @Input() appDelayElement:number=0

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit(){
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    },this.appDelayElement);
  }

}
