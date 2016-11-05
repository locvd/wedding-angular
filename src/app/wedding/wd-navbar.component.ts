import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-navbar',
  templateUrl: './wd-navbar.component.html'
})
export class WeddingNavbarComponent implements OnInit {
  currentNavItem: string;
  brandName: string;
  home: Object;
  about: Object;
  system: Object;
  members: Object;
  activeItem: Object;
  navItems: Array<any>;

  constructor(){
    this.currentNavItem = 'page1';
    this.brandName='結婚相談所';
  }

  ngOnInit() {
    this.home = {
      name: "ホーム",
      link: "/wedding"
    };
    this.about = {
      name: "サービス概要",
      link: "/wedding/about"
    };
    this.system = {
      name: "システム",
      link: "/wedding/system",
      items: [
        {
          name: "結婚流れ",
          link: "/wedding/system/flow"
        },
        {
          name: "料金システム",
          link: "/wedding/system/price"
        },
        {
          name: "よくある質問",
          link: "/wedding/system/qa"
        }
      ]
    }
    this.members = {
      name: "会員一覧",
      link: "/wedding/members"
    }
    this.activeItem = this.home;
  }

  getClass(item) {
    var result = "";
    if (item == this.system){
      result += "dropdown";
    }
    if (this.activeItem == item){
      result += " active"
    }
    return result;
  }

  setActive(item){
    this.activeItem = item;
  }
}
