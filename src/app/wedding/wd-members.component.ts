import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-members',
  templateUrl: './wd-members.component.html',
  styleUrls: [
    "../../assets/css/layout-shop.css"
  ]
})
export class WeddingMembersComponent {
  pageTitle: string;
  topPage: Object;
  membersPage: Object;
  members: Array<any>;
  seeDetails: string;
  engagedNotification: string;
  wishList: Array<number>;

  constructor() {
    this.seeDetails = "気になる";
    this.engagedNotification = "婚約済み";
    this.wishList = [];
  }

  ngOnInit() {
    this.pageTitle = "会員一覧";
    this.topPage = {
      title: "ホーム",
      link: "/wedding"
    }
    this.membersPage = {
      title: "会員一覧",
      link: "/wedding/members"
    }
    this.members = [
      {
        images: [
          "assets/img/demo/shop/products/300x450/p13.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: true,
        isSale: true,
        introduction: "20歳　初婚　ハノイ付近",
        rating: 4,
        memberId: "V-101",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p11.jpg",
          "assets/img/demo/shop/products/300x450/p3.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "30歳　再婚　ハノイ",
        rating: 2,
        memberId: "V-100",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p10.jpg",
          "assets/img/demo/shop/products/300x450/p2.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "30歳　再婚　ハノイ",
        rating: 2,
        memberId: "V-99",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p12.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "25歳　初婚　ハノイ",
        rating: 2,
        memberId: "V-98",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p1.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 3,
        memberId: "V-97",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p3.jpg",
          "assets/img/demo/shop/products/300x450/p8.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 3,
        memberId: "V-96",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p8.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-95",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p7.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "28歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-94",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p6.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-93",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p5.jpg",
          "assets/img/demo/shop/products/300x450/p1.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-92",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p4.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "21歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-91",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p11.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 1,
        memberId: "V-90",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p2.jpg",
          "assets/img/demo/shop/products/300x450/p12.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-89",
        isEngaged: false
      },{
        images: [
          "assets/img/demo/shop/products/300x450/p13.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: true,
        isSale: true,
        introduction: "20歳　初婚　ハノイ付近",
        rating: 4,
        memberId: "V-88",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p11.jpg",
          "assets/img/demo/shop/products/300x450/p3.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "30歳　再婚　ハノイ",
        rating: 2,
        memberId: "V-87",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p10.jpg",
          "assets/img/demo/shop/products/300x450/p2.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "30歳　再婚　ハノイ",
        rating: 2,
        memberId: "V-86",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p12.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "25歳　初婚　ハノイ",
        rating: 2,
        memberId: "V-85",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p1.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 3,
        memberId: "V-84",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p3.jpg",
          "assets/img/demo/shop/products/300x450/p8.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 3,
        memberId: "V-83",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p8.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-82",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p7.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "28歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-81",
        isEngaged: true
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p6.jpg",
          "assets/img/demo/shop/products/300x450/p14.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-80",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p5.jpg",
          "assets/img/demo/shop/products/300x450/p1.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "22歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-79",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p4.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "21歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-78",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p11.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 1,
        memberId: "V-77",
        isEngaged: false
      },
      {
        images: [
          "assets/img/demo/shop/products/300x450/p2.jpg",
          "assets/img/demo/shop/products/300x450/p12.jpg"
        ],
        isNew: false,
        isSale: false,
        introduction: "20歳　初婚　ハノイ",
        rating: 4,
        memberId: "V-76",
        isEngaged: false
      }

    ]
  }

  getItemClass() {
    return "col-lg-3 col-sm-3";
  }
  getRatingClass(rating) {
    return "rating rating-" + rating + " size-13";
  }
  getLinkForMemberID(memberId) {
    return "/wedding/members/"+memberId;
  }
  addToWishList(memberId) {

  }
  getAlt(memberId, index) {
    return  memberId+"-"+index;
  }

}
