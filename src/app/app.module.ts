import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatInputModule,
  MatButtonModule, 
  MatSelectModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatTableModule,
  MatFormFieldModule,
  MatTooltipModule, 
  MatDialogModule, 
  MAT_DIALOG_DATA
} from '@angular/material';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TripTableComponent } from './trip-table/trip-table.component';
import { CalendarComponent } from './trip-table/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NavComponent,
    AboutComponent,
    ContactFormComponent,
    SearchComponent,
    TripTableComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbDatepickerModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule, 
    MatInputModule,
    MatButtonModule,
    HttpClientModule

  ],
  exports: [ContactFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
