import { Injectable } from '@angular/core';
import {movieList} from '../../src/app/contentDB/contentDb';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor() { }

  getContentMovieList() : Observable<any>{
    return of(movieList);
    }

    getContentOfMovieById(id:any) : Observable<any>{
      let movieContent;
      for(let i=0; i<movieList.length; i++){
        if(movieList[i].id === id){
          movieContent = movieList[i];
        }
      }     
      return of(movieContent)
      }
}
