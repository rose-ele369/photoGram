import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { WebNavbarComponent } from './navigation/web-navbar/web-navbar.component';
//import { UnsplashComponent } from './components/unsplash/unsplash.component';

@NgModule({
  declarations: [
    AppComponent,
    WebNavbarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    //UnsplashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
