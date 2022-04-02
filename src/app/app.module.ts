import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { AgmCoreModule } from '@agm/core';

import { Header } from './components/header/header.component';
import { Menu } from './components/body/menu/menu.component';
import { Detail } from './components/body/detail/detail.component';


@NgModule({
  declarations: [AppComponent, Header, Menu, Detail],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /*AgmCoreModule.forRoot({apiKey: 'AIzaSyAvXYAci6R9V4Ji8o1gpDmKfQA4DdGEzlc'})*/],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
