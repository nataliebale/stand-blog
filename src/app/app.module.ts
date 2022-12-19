import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { environment } from '../environments/environment';
import { FiltersModule } from "./libs/components";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'Stand Blog App Devtools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    FiltersModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
