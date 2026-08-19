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
import { YourNextWatchComponent } from './navigating_components/only-on-netflix/your-next-watch/your-next-watch.component';
import { KDramasComponent } from './navigating_components/only-on-netflix/k-dramas/k-dramas.component';
import { IndianTeamDramasComponent } from './navigating_components/only-on-netflix/indian-team-dramas/indian-team-dramas.component';
import { AwardWinningTvShowsComponent } from './navigating_components/only-on-netflix/award-winning-tv-shows/award-winning-tv-shows.component';
import { HollywoodMoviesComponent } from './navigating_components/only-on-netflix/hollywood-movies/hollywood-movies.component';
import { InternationalTvShowsComponent } from './navigating_components/only-on-netflix/international-tv-shows/international-tv-shows.component';
import { UsTvShowsComponent } from './navigating_components/only-on-netflix/us-tv-shows/us-tv-shows.component';
import { HindiLanguageMoviesComponent } from './navigating_components/only-on-netflix/hindi-language-movies/hindi-language-movies.component';
import { TvSeriesComponent } from './navigating_components/only-on-netflix/tv-series/tv-series.component';
import { InternationalTvDramasComponent } from './navigating_components/only-on-netflix/international-tv-dramas/international-tv-dramas.component';
import { ComedyMoviesComponent } from './navigating_components/only-on-netflix/comedy-movies/comedy-movies.component';
import { EpicWorldsComponent } from './navigating_components/only-on-netflix/epic-worlds/epic-worlds.component';
import { RomanticMoviesComponent } from './navigating_components/only-on-netflix/romantic-movies/romantic-movies.component';
import { CriticallyAcclaimedTvShowsComponent } from './navigating_components/only-on-netflix/critically-acclaimed-tv-shows/critically-acclaimed-tv-shows.component';
import { UsTvDramasComponent } from './navigating_components/only-on-netflix/us-tv-dramas/us-tv-dramas.component';
import { TvComediesComponent } from './navigating_components/only-on-netflix/tv-comedies/tv-comedies.component';
import { BitOfHurryComponent } from './navigating_components/only-on-netflix/bit-of-hurry/bit-of-hurry.component';
import { PlansComponent } from './navigating_components/only-on-netflix/plans/plans.component';
import { HeroSectionComponent } from './navigating_components/only-on-netflix/hero-section/hero-section.component';

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
    NavbarComponent,
    YourNextWatchComponent,
    KDramasComponent,
    IndianTeamDramasComponent,
    AwardWinningTvShowsComponent,
    HollywoodMoviesComponent,
    InternationalTvShowsComponent,
    UsTvShowsComponent,
    HindiLanguageMoviesComponent,
    TvSeriesComponent,
    InternationalTvDramasComponent,
    ComedyMoviesComponent,
    EpicWorldsComponent,
    RomanticMoviesComponent,
    CriticallyAcclaimedTvShowsComponent,
    UsTvDramasComponent,
    TvComediesComponent,
    BitOfHurryComponent,
    PlansComponent,
    HeroSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
