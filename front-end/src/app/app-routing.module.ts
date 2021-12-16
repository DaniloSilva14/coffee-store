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
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
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
    component: HomeAdminComponent,
    // aki tem q ter guarda de rota
  },
  {
    path: 'admin/manage-users',
    component: ManageUsersComponent,
    // aki tem q ter guarda de rota
  },
  {
    path: 'admin/manage-admins',
    component: ManageAdminsComponent,
    // aki tem q ter guarda de rota
  },
  {
    path: 'admin/manage-products',
    component: ManageProductsComponent,
    // aki tem q ter guarda de rota
  },
  {
    path: 'admin/manage-sales',
    component: ManageSalesComponent,
    // aki tem q ter guarda de rota
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
