import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WeddingNavbarComponent } from './wd-navbar.component';
import 'jquery';
import 'owl.carousel';

@Component({
  selector: "wd-top",
  templateUrl: "./wd-top.component.html"
})
export class WeddingTopComponent implements OnInit, AfterViewInit {
  welcomeTitle: string;
  welcomeSupportTitle: string;
  welcomeContent: string;

  introTitle: string;
  introTitleSupport: string;
  introContent: string;

  learnMore: string;

  links: Object;
  promotion: Object;

  public state: any = {

    carousel: {
      demo1: {
        interval: 2000,
        noWrap: false,
        slides: [
          {
            title: 'Title 1',
            text: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/wedding/top/wedding-crop-01.jpeg',
          },
          {
            title: 'Title 2',
            text: 'Dolores justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/wedding/top/wedding-crop-02.jpeg',
          },
          {
            title: 'Title 3',
            text: 'Lorem justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
            src: 'assets/img/wedding/top/wedding-crop-03.jpeg',
          },
        ]
      }
    }
  };

  constructor() {
    this.learnMore = "もっと見る";

    this.welcomeTitle = "ベトナム国際結婚";
    this.welcomeSupportTitle = "理想な結婚相手を探す婚活ガイド";
    this.welcomeContent = "国際結婚をお考えの貴方に安心できるベトナム女性を紹介"
      + "<br>ベトナム人女性を日本人結婚希望男性にご紹介いたします";

    this.introTitle = "当社の特徴";
    this.introTitleSupport = "理想な結婚相手を探す婚活ガイド";
    this.introContent = "国際結婚ベトナムはアジア女性を日本人男性にご紹介しています。東アジアは近年、目覚しい経済成長と発展をとげています。 それはハノイ、ホーチミンの一部の都市だけで、都心から少し離れるとまだのどかな田園風景が見られます"
      + "<br>弊社がご紹介をする女性達もそんな都会に染まらない地方の素直な女性たちです。結婚希望の男性は国際結婚に一歩踏み出す勇気を出して下さい、前に出ないと始まりません、ぜひベトナムその他アジア女性の素直さや穏やかさを感じて頂きたいと思います。そして結婚に対する気持ちを諦めないで幸せになる努力と勇気を持って下さい。外国人女性と結婚を真面目にお考えの方に限ります。";
  }

  ngOnInit() {
    this.links = {
      about: "/wedding/about",
      system: "/wedding/system",
      top: "/wedding"
    }
    this.promotion = {
      memberQuality: "女性の質に自慢",
      memberQualityContent: "結婚相手は、結婚する人に とってオンリーワンの存在です。"
      + "当社では純粋素朴な人柄を持ち、誠実にお相手に尽くしてくれる「理想的な女性」を探すのに労力をいといません。",

      serviceQuality: "プロなサービス",
      serviceQualityContent: "当社では入会前、入会後のカ ウンセリングを重視し、納得の行くまで話し合い、メール交換をしてお相手の選 考に役立てていただいております。",

      cheapPrice: "費用が節約",
      cheapPriceContent: "業務効率化に従い、お客様の費用を節約できます。出来るだけ現地スタッフを採用し、会員募集から管理、お客様の世話まで一巻サービスを提供致します。"
    }
  }
  ngAfterViewInit() {
    jQuery(".owl-carousel").owlCarousel();
  }

}
