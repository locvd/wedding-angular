/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {WeddingHomeComponent} from "./wedding/wd-home.component";
import {WeddingTopComponent} from "./wedding/wd-top.component";
import {WeddingAboutComponent} from "./wedding/wd-about.component";
import {WeddingMembersComponent} from "./wedding/wd-members.component";

export const routes:Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
          path: '', redirectTo: 'dashboard/analytics', pathMatch: 'full'
      },
      {path: 'dashboard', loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',data:{pageTitle: 'Dashboard'}},
      {path: 'smartadmin', loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',data:{pageTitle: 'Smartadmin'}},
      {path: 'app-views', loadChildren: 'app/+app-views/app-views.module#AppViewsModule',data:{pageTitle: 'App Views'}},
      {path: 'calendar', loadChildren: 'app/+calendar/calendar.module#CalendarModule',data:{pageTitle: 'Calendar'}},
      {path: 'e-commerce', loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',data:{pageTitle: 'E-commerce'}},
      {path: 'forms', loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',data:{pageTitle: 'Forms'}},
      {path: 'graphs', loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',data:{pageTitle: 'Graphs'}},
      {path: 'maps', loadChildren: 'app/+maps/maps.module#MapsModule',data:{pageTitle: 'Maps'}},
      {path: 'miscellaneous', loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',data:{pageTitle: 'Miscellaneous'}},
      {path: 'outlook', loadChildren: 'app/+outlook/outlook.module#OutlookModule',data:{pageTitle: 'Outlook'}},
      {path: 'tables', loadChildren: 'app/+tables/tables.module#TablesModule',data:{pageTitle: 'Tables'}},
      {path: 'ui', loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',data:{pageTitle: 'Ui'}},
      {path: 'widgets', loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',data:{pageTitle: 'Widgets'}}
    ]
  },
  {
    path: 'wedding', component: WeddingHomeComponent,
    data: {pageTitle: 'Wedding Home'},
    children: [
      {path: '', component: WeddingTopComponent},
      {path: 'about', component: WeddingAboutComponent, data: {pageTitle: 'About'}},
      {path: 'members', component: WeddingMembersComponent, data: {pageTitle: 'Members'}}
    ]
  },
  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},
  {path: '**', redirectTo: 'miscellaneous'}
//
];

export const routing = RouterModule.forRoot(routes);
