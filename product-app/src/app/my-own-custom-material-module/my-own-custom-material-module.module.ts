import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [BrowserAnimationsModule, MatInputModule, MatListModule],
  exports: [BrowserAnimationsModule, MatInputModule, MatListModule],
})

export class MyOwnCustomMaterialModuleModule { }
