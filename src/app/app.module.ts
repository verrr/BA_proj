import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { DummiesComponent } from './dummie/dummie.component';
import { HomeComponent } from './home/home.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { HeaderCallToActionComponent } from './header-call-to-action/header-call-to-action.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { PromotionalMainTextComponent } from './promotional-main-text/promotional-main-text.component';
import { PageSectionHeaderComponent } from './page-section-header/page-section-header.component';
import { PageSectionServicesComponent } from './page-section-services/page-section-services.component';
import { ServicesProgrammingComponent } from './page-section-services/services-programming/services-programming.component';
import { ServicesVisualsComponent } from './page-section-services/services-visuals/services-visuals.component';
import { ServicesMoreComponent } from './page-section-services/services-more/services-more.component';
import { PageSectionMigrateComponent } from './page-section-migrate/page-section-migrate.component';
import { PageSectionPartnersComponent } from './page-section-partners/page-section-partners.component';
import { PageSectionLocationComponent } from './page-section-location/page-section-location.component';
import { PageSectionReferencesComponent } from './page-section-references/page-section-references.component';
import { ReferenceBoxComponent } from './page-section-references/reference-box/reference-box.component';
import { PageSectionAboutComponent } from './page-section-about/page-section-about.component';
import { PageSectionDemoComponent } from './page-section-demo/page-section-demo.component';
import { PageSectionFooterComponent } from './page-section-footer/page-section-footer.component';
import { NavButtonLoginComponent } from './main-navigation/nav-button-login/nav-button-login.component';
import { NavButtonMenuComponent } from './main-navigation/nav-button-menu/nav-button-menu.component';
import { NavButtonTranslationsComponent } from './main-navigation/nav-button-translations/nav-button-translations.component';
import { SectionJobsHeaderComponent } from './jobs/section-jobs-header/section-jobs-header.component';
import { SectionJobsHeadlineComponent } from './jobs/section-jobs-headline/section-jobs-headline.component';
import { SectionJobsOpeningsComponent } from './jobs/section-jobs-openings/section-jobs-openings.component';
import { SectionJobsOpportunitiesComponent } from './jobs/section-jobs-opportunities/section-jobs-opportunities.component';
import { JobCardOpeningComponent } from './jobs/section-jobs-openings/job-card-opening/job-card-opening.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { PageModuleChatboxComponent } from './page-module-chatbox/page-module-chatbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServerService} from './server.service';





const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'main',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  }



];

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    DummiesComponent,
    HomeComponent,
    PageSectionComponent,
    HeaderCallToActionComponent,
    MainNavigationComponent,
    PromotionalMainTextComponent,
    PageSectionHeaderComponent,
    PageSectionServicesComponent,
    ServicesProgrammingComponent,
    ServicesVisualsComponent,
    ServicesMoreComponent,
    PageSectionMigrateComponent,
    PageSectionPartnersComponent,
    PageSectionLocationComponent,
    PageSectionReferencesComponent,
    ReferenceBoxComponent,
    PageSectionAboutComponent,
    PageSectionDemoComponent,
    PageSectionFooterComponent,
    NavButtonLoginComponent,
    NavButtonMenuComponent,
    NavButtonTranslationsComponent,
    SectionJobsHeaderComponent,
    SectionJobsHeadlineComponent,
    SectionJobsOpeningsComponent,
    SectionJobsOpportunitiesComponent,
    JobCardOpeningComponent,
    PageModuleChatboxComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
