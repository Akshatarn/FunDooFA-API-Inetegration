import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any ,args: string) {
    if(args == 'All Notes'){
      return value;
    }
    else{
      args = args.toLowerCase();
    }
    return value.filter((note : any)=>{
      return(
        note.title.toLowerCase().includes(args) | note.description.toLowerCase().includes(args)
      );
    });
  }



}
