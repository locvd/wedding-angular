import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: [
    //Basic styles
    "../../../../assets/css/bootstrap.min.css",
    "../../../../assets/css/font-awesome.min.css",

    //SmartAdmin Styles : Caution! DO NOT change the order
    "../../../../assets/css/smartadmin-production-plugins.min.css",
    "../../../../assets/css/smartadmin-production.min.css",
    "../../../../assets/css/smartadmin-skins.min.css",

    //SmartAdmin RTL Support (Not using RTL? Disable the CSS below to save bandwidth)
    "../../../../assets/css/smartadmin-rtl.min.css",

    //SmartAdmin Angular 2. Flex Layout
    "../../../../assets/css/smartadmin-angular2.css",

    //Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp
    "../../../../assets/css/demo.min.css"
  ],
  encapsulation: ViewEncapsulation.None
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
