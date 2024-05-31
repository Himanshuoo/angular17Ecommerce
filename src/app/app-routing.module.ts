import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { BuyComponent } from './buy/buy.component';
import { SearchComponent } from './search/search.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { myguardGuard } from './myguard.guard';
import { ParentComponent } from './parent/parent.component';
import { AngfeaturesComponent } from './angfeatures/angfeatures.component';
import { CoolComponent } from './cool/cool.component';

const routes: Routes = [
 {path:'', component:ProductsComponent} ,
{
path: 'login', component:LoginComponent

},
{
  path: 'register', component:RegisterComponent
  
  },
  {
    path: 'products', component:ProductsComponent
    
    },
    {
      path: 'buy', component:BuyComponent, canActivate:[myguardGuard]
      
      },
      {
        path: 'search', component:SearchComponent
        
        },
        {
          path: 'cool', component:CoolComponent
          
          },
        
          
    {
      path: 'parent', component:ParentComponent
      
      },
        {
          path: 'feedback', component:FeedbackComponent
          
          },
          {
            path: 'ang', component:AngfeaturesComponent
            
            },

          {
            path:'**', component:NotfoundComponent
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
