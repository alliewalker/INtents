import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatMenuModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
