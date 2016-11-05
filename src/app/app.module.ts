import {NgModule} from '@angular/core';

import {SmartadminModule} from './shared/smartadmin.module'
import {AppComponent} from './app.component';

import {routing} from './app.routing';
import {BrowserModule} from "@angular/platform-browser";
import {UserModule} from "./shared/user/user.module";
import {UserService} from "./shared/user/user.service";
import {WeddingModule} from "./wedding/wd.module";
import {WeddingHomeComponent} from "./wedding/wd-home.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeddingModule.forRoot(),
    SmartadminModule.forRoot(),
    UserModule.forRoot(),
    routing
  ],
  providers: [UserService],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
