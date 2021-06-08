import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrecnciesCodeService } from './currecncies-code.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [CurrecnciesCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
