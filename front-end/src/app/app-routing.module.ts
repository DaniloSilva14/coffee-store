import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ManageAdminsComponent } from './admin/manage-admins/manage-admins.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageSalesComponent } from './admin/manage-sales/manage-sales.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { KartComponent } from './components/kart/kart.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpecialComponent } from './components/special/special.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: '',
  //   component: SpecialComponent,
  // },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'store/kart',
    component: KartComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: HomeAdminComponent
  },
  {
    path: 'admin/manage-users',
    component: ManageUsersComponent
  },
  {
    path: 'admin/manage-admins',
    component: ManageAdminsComponent
  },
  {
    path: 'admin/manage-products',
    component: ManageProductsComponent
  },
  {
    path: 'admin/manage-sales',
    component: ManageSalesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
