
  
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
     const transformvalue = datePipe.transform(value, 'dd/MM/yyyy');
     return value;
 }
}