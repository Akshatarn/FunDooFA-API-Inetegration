import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any,args: any): any[] {
    console.log(args)
    if(args =="All notes"){
      return value
    }else{
      args=args.toLowerCase();
    }
    return value?.filter((note:any)=>{
      return note.title.toLowerCase().includes(args) | note.description.toLowerCase().includes(args);
    })
  }
}
