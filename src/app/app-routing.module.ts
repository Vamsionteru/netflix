import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OnlyOnNetflixComponent } from './navigating_components/only-on-netflix/only-on-netflix.component';
import { FAQComponent } from './navigating_components/faq/faq.component';
import { AccountComponent } from './navigating_components/account/account.component';
import { HelpingCenterComponent } from './navigating_components/helping-center/helping-center.component';
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

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'only-on-netflix', component: OnlyOnNetflixComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'Help-Center', component: HelpingCenterComponent},
  {path: 'Account', component: AccountComponent},
  {path: 'Media-Center', component: MediaCenterComponent},
  {path: 'Investor-Relation', component: InvestorRelationsComponent},
  {path: 'Jobs', component: JobComponent},
  {path: 'Ways-To-Watch', component: WaysToWatchComponent},
  {path: 'Terms-of-us', component: TermsOfUseComponent},
  {path: 'Privacy', component: PrivacyComponent},
  {path: 'Cookie-Preference', component: CookiePreferencesComponent},
  {path: 'Corporate-Information', component: CorporateInformationComponent},
  {path: 'Contact-Us', component: ContactUsComponent},
  {path: 'Speed-Test', component: SpeedTestComponent},
  {path: 'Legal-Notices', component: LegalNoticesComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
