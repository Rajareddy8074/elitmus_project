import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProductsService } from './services/products.service';
import { FormsModule } from '@angular/forms';
import { SecondPageComponent } from './second-page/second-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersService } from './services/users.service';
import { WinningPageComponent } from './winning-page/winning-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    LoginPageComponent,
    WinningPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
