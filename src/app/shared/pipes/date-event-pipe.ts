import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from "@angular/common";

@Pipe({
  name: 'dateEvent',
  standalone: true
})
export class DateEventPipe implements PipeTransform {
  transform(value: Date): string {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (value.toDateString() === today.toDateString()) {
      return "Dnes";
    } else if (value.toDateString() === tomorrow.toDateString()) {
      return "Zítra";
    } else {
      return formatDate(value, "dd.M", "en-US");
    }
  }
}
