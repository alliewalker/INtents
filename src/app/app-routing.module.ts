import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { AuthComponent } from './auth/auth.component';
// import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: '', component: AuthComponent },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
