import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CardGroomingComponent } from './card-grooming/card-grooming.component';
import { CardStoreHoursComponent } from './card-store-hours/card-store-hours.component';
import { CardStoreInformationComponent } from './card-store-information/card-store-information.component';
import { DataAddressComponent } from './data-address/data-address.component';
import { DataEmailComponent } from './data-email/data-email.component';
import { DataPhoneNumberComponent } from './data-phone-number/data-phone-number.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageGroomingComponent } from './page-grooming/page-grooming.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageProductsComponent } from './page-products/page-products.component';

const appRoutes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'grooming', component: PageGroomingComponent },
  { path: 'products', component: PageProductsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    PageHomeComponent,
    PageProductsComponent,
    PageGroomingComponent,
    CardGroomingComponent,
    CardStoreHoursComponent,
    CardStoreInformationComponent,
    DataEmailComponent,
    DataPhoneNumberComponent,
    DataAddressComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(
      appRoutes,
    ),

    // Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
