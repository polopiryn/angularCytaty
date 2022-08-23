import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'AutorPipe'
})

export class AuthorPipe implements PipeTransform{
  transform(value: string) {
    return `Autor: ${value}`
  }
}
