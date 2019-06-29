import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RadioModule } from './radio/radio.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RadioModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
