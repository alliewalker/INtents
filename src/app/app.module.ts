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
import { SearchComponent } from './home/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { TripTableComponent } from './trip-table/trip-table.component';
import { CalendarComponent } from './trip-table/calendar/calendar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';

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
    ReviewsComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgbDatepickerModule,
    MatMenuModule,
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
exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
