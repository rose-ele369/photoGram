import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UnsplashComponent } from './components/unsplash/unsplash.component';
//import { UnsplashService } from './Services/Unsplash/unsplash.service';


const routes: Routes = [
  //{ path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'shopping', component: ShoppingComponent },
 // { path: 'basket', component: CustomerBasketComponent },
  // { path: 'recordatorio/:id', component: AgendaComponent },
  { path: 'unpsplash', component: UnsplashComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [

    //UnsplashService,
  ],

})


export class AppRoutingModule { }
