import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result='';
    for (let index = 0; index < value.length; index++) {
      result = value[index] + result;

    }
    return result;
  }

}

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let searchText = new RegExp(args,'ig');
    if(value){
      return value.filter((data: { name: string; Address: string; })=>{
        if(data){
          return data.name.search(searchText)>-1 ||data.Address.search(searchText)>-1;
        }
        else   {
          return value;
        }
      });
    }
  }

}
