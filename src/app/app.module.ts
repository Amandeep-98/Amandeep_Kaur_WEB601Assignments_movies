import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { DramaPipe } from './drama.pipe';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { HoverEffectDirective } from './directive/hover-effect.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,   
    ContentListComponent, DramaPipe, MovieCardComponent, HoverEffectDirective, CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
