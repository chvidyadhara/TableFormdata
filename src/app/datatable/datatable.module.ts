import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatabledisComponent, DialogOverviewExampleDialog } from './datatabledis/datatabledis.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DatatabledisComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DatatabledisComponent

  ],
  exports:[DatatabledisComponent]
})
export class DatatableModule { }
