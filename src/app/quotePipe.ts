import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'QuotePipe'
})

export class QuotePipe implements PipeTransform{
  transform(value: string) {
    return `„${value}”`
  }
}
