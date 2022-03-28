import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentServiceService } from '../content-service.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  movieForm:any;
  contentList: any=[];
  @Output() newItemEvent = new EventEmitter<string>();
    
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient, private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      name: ["",],
      type: ["",],     
      imageUrl: ["",],
      body: ["",]      
    });
  }
  getMovieDetails(e:any){
    e.preventDefault();
    console.log(this.movieForm.value)
    this.contentService.addContent(this.movieForm.value)
      .subscribe(newContentFromServer =>{
      this.contentList.push(newContentFromServer);
      console.log(this.contentList);
      this.addNewItem(newContentFromServer);
      });
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
