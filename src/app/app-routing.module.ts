import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent },
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'reviews', component: ReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
