import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'
@Pipe({
  name: 'stylus'
})
export class StylusPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value:string): unknown {
    const htmlelem = document.createElement("span");
    htmlelem.textContent = value;
    htmlelem.setAttribute('style',"color:maroon");
    if(value.toLowerCase().includes("dog"))
      htmlelem.setAttribute('style',"color:blue");
    
    return this.sanitizer.bypassSecurityTrustHtml(htmlelem.outerHTML);
  }

}
