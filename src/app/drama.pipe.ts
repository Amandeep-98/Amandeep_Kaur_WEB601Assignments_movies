import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drama',
  pure: false
})
export class DramaPipe implements PipeTransform {

  //value is movieList = array movieType is genre = Drama
  transform(movieListArray:any, movieType:any) {
    return movieListArray.filter(function(item:any){
         let result = item.type.find(function(element:any) {
          if (element.toLowerCase().includes(movieType.toLowerCase())) {
            return true;
          }
        })
        return result;
    });
  }

}
