import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { ManageAdminsComponent } from './admin/manage-admins/manage-admins.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageSalesComponent } from './admin/manage-sales/manage-sales.component';
import { MatTableModule } from '@angular/material/table'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DialogDeleteProductComponent } from './admin/dialog-delete-product/dialog-delete-product.component';
import { DialogAlterProductComponent } from './admin/dialog-alter-product/dialog-alter-product.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    StoreComponent,
    HomeAdminComponent,
    HeaderAdminComponent,
    ManageAdminsComponent,
    ManageUsersComponent,
    ManageProductsComponent,
    ManageSalesComponent,
    DialogDeleteProductComponent,
    DialogAlterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
