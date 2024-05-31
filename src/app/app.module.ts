import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buy/buy.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DiscountPipe } from './discount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AngfeaturesComponent } from './angfeatures/angfeatures.component';
import { CoolComponent } from './cool/cool.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyComponent,
    ProductsComponent,
    SearchComponent,
    NotfoundComponent,
    FeedbackComponent,
    DiscountPipe,
    ParentComponent,
    ChildComponent,
    AngfeaturesComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule, FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
