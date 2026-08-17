import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { OnlyOnNetflixComponent } from './navigating_components/only-on-netflix/only-on-netflix.component';
import { FAQComponent } from './navigating_components/faq/faq.component';
import { HelpingCenterComponent } from './navigating_components/helping-center/helping-center.component';
import { AccountComponent } from './navigating_components/account/account.component';
import { MediaCenterComponent } from './navigating_components/media-center/media-center.component';
import { InvestorRelationsComponent } from './navigating_components/investor-relations/investor-relations.component';
import { JobComponent } from './navigating_components/job/job.component';
import { WaysToWatchComponent } from './navigating_components/ways-to-watch/ways-to-watch.component';
import { TermsOfUseComponent } from './navigating_components/terms-of-use/terms-of-use.component';
import { PrivacyComponent } from './navigating_components/privacy/privacy.component';
import { CookiePreferencesComponent } from './navigating_components/cookie-preferences/cookie-preferences.component';
import { CorporateInformationComponent } from './navigating_components/corporate-information/corporate-information.component';
import { ContactUsComponent } from './navigating_components/contact-us/contact-us.component';
import { SpeedTestComponent } from './navigating_components/speed-test/speed-test.component';
import { LegalNoticesComponent } from './navigating_components/legal-notices/legal-notices.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    LoginComponent,
    OnlyOnNetflixComponent,
    FAQComponent,
    HelpingCenterComponent,
    AccountComponent,
    MediaCenterComponent,
    InvestorRelationsComponent,
    JobComponent,
    WaysToWatchComponent,
    TermsOfUseComponent,
    PrivacyComponent,
    CookiePreferencesComponent,
    CorporateInformationComponent,
    ContactUsComponent,
    SpeedTestComponent,
    LegalNoticesComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
