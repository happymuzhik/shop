import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [HighlightDirective],
  imports: [CommonModule],
  exports: [HighlightDirective],
  providers: []
})
export class SharedModule { }
