import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
<<<<<<< HEAD
  {path: '', component: AuthComponent },
  {path: 'home', component: HomeComponent},
=======
  {path: 'auth', component: AuthComponent },
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent },
>>>>>>> 9937994fb7dfb880d890fa9d4649eb8807964cd4
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'reviews', component: ReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
