import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

// import { ProductHeaderModule } from 'mf-ph';
// import { ProductViewModule } from '../../node_modules/product-view/src'
import { ProductViewModule } from 'mf-pv-new';
// import {ProductCartModule} from 'mf-pc/app/app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ProductViewModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}