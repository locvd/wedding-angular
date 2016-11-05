import {NgModule, ModuleWithProviders} from '@angular/core';
import {SmartadminModule} from '../shared/smartadmin.module';

import {WEDDINGS_DECLARATIONS} from './index';

@NgModule({
  imports: [
    SmartadminModule.forRoot()
  ],
  declarations: [
    ...WEDDINGS_DECLARATIONS
  ],
  providers: []
})
export class WeddingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WeddingModule,
      providers: []
    };
  }
}
