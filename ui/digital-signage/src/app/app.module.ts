import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './digital-signage/home/home.component';
import { HeaderComponent } from './digital-signage/header/header.component';
import { FooterComponent } from './digital-signage/footer/footer.component';
import { BroadcastSeriesListComponent } from './digital-signage/broadcast-series-list/broadcast-series-list.component';
import { AddSeriesComponent } from './digital-signage/add-series/add-series.component';
import { DataService } from './digital-signage/shared/service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BroadcastSeriesListComponent,
    AddSeriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
