import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username',
  standalone: true
})

export class UsernamePipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value !== 'string') {
      return value;
    }

    const lastPosition = value.lastIndexOf("#");
    return value.substring(0, lastPosition);
  }

}
