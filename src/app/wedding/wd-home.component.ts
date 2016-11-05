import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeddingNavbarComponent } from './wd-navbar.component';

@Component({
  selector: 'wd-home',
  templateUrl: './wd-home.component.html',
  styleUrls: [
    //web fonts
    './webfonts.css',

    // Basic css
    '../../assets/plugins/bootstrap/css/bootstrap.min.css',

    //Revolution Slider
    '../../assets/plugins/slider.revolution/css/extralayers.css',
    '../../assets/plugins/slider.revolution/css/settings.css',

    //Theme css
    '../../assets/css/essentials.css',
    '../../assets/css/layout.css',

    //Page livel script
    '../../assets/css/header-1.css',
    '../../assets/css/color_scheme/green.css',
    '../../assets/plugins/styleswitcher/styleswitcher.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class WeddingHomeComponent {

}
