import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProductCrudComponent } from './components/product-crud/product-crud.component';
import { RoleGuard } from './guards/role.guard';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'categories/:categoryId', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'product-manager',
    component: ProductCrudComponent,
    canActivate: [RoleGuard],
  },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'products', component: ProductCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
