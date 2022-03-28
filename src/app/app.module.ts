import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { DramaPipe } from './drama.pipe';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../app/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,   
    ContentListComponent, DramaPipe, MovieCardComponent, HoverEffectDirective, ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
