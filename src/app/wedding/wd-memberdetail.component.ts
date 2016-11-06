import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'wd-memberdetail',
  templateUrl: './wd-memberdetail.component.html'
})
export class WeddingMemberDetailComponent implements OnInit, OnDestroy {
  paramsSub: Subscription;
  memberId: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(){
    this.paramsSub = this.route.params
    .map(params => params['memberId'])
    .subscribe(memberId => {
      this.memberId = memberId;
    })
  }

  ngOnDestroy(){
    this.paramsSub.unsubscribe();
  }
}
