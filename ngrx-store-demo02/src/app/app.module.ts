import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './core/app-routing.module';

import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './core/pet-tag.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({petTag: petTagReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
