import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageMooresvilleComponent } from './page-mooresville/page-mooresville.component';
import { PageProductsComponent } from './page-products/page-products.component';
import { PageGroomingComponent } from './page-grooming/page-grooming.component';
import { CardGroomingComponent } from './card-grooming/card-grooming.component';
import { CardStoreHoursComponent } from './card-store-hours/card-store-hours.component';
import { CardStoreInformationComponent } from './card-store-information/card-store-information.component';
import { DataEmailComponent } from './data-email/data-email.component';
import { DataPhoneNumberComponent } from './data-phone-number/data-phone-number.component';
import { DataAddressComponent } from './data-address/data-address.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';

const appRoutes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'mooresville', component: PageMooresvilleComponent },
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
    PageMooresvilleComponent,
    PageProductsComponent,
    PageGroomingComponent,
    CardGroomingComponent,
    CardStoreHoursComponent,
    CardStoreInformationComponent,
    DataEmailComponent,
    DataPhoneNumberComponent,
    DataAddressComponent,
    NavbarButtonComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    // Angular Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
