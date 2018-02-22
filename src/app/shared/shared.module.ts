import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  MatGridListModule
} from '@angular/material/grid-list';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatIconModule
} from '@angular/material/icon';



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
})
export class SharedModule {}
