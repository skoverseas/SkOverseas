import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user-components/home/home.component';
import { AboutComponent } from './user-components/about/about.component';
import { ContactComponent } from './user-components/contact/contact.component';
import { VisaComponent } from './user-components/visa/visa.component';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { TopHeaderComponent } from './common-components/top-header/top-header.component';
import { CarouselComponent } from './common-components/carousel/carousel.component';
import { ScrollFadeDirective } from './scroll-fade.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    VisaComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TopHeaderComponent,
    CarouselComponent,
    ScrollFadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
