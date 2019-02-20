import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatInputModule,
  MatButtonModule, 
  MatSelectModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatFormFieldModule,
  MatTooltipModule, 
  MatDialogModule, 
  MAT_DIALOG_DATA
} from '@angular/material';
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
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    NavComponent,
    AboutComponent,
    ContactFormComponent,
    SearchComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
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
  bootstrap: [AppComponent],
  entryComponents: [ContactFormComponent]
})
export class AppModule { }
