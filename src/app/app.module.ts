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
import { PhoneNumberComponent } from './phone-number/phone-number.component';

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
    PhoneNumberComponent
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
