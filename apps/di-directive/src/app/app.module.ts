import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoodadComponent } from './doodad/doodad.component';
import { HighlightDirective } from './highlight.directive';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [AppComponent, DoodadComponent, HighlightDirective, WrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
