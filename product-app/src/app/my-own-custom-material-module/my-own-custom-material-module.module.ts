import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [BrowserAnimationsModule, MatInputModule],
  exports: [BrowserAnimationsModule, MatInputModule],
})

export class MyOwnCustomMaterialModuleModule { }
