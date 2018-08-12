import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [BrowserAnimationsModule, MatInputModule, MatListModule, MatButtonModule],
  exports: [BrowserAnimationsModule, MatInputModule, MatListModule, MatButtonModule],
})

export class MyOwnCustomMaterialModuleModule { }
