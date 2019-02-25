import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './home/search/search.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LayoutComponent } from './layout/layout.component';

const authorizedRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'reviews', component: ReviewsComponent}
];

const routes: Routes = [
  {path: '', component: AuthComponent },
  {
    path: '', 
    component: LayoutComponent,
    children: authorizedRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
