import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdatadatatableComponent } from './userdatadatatable/userdatadatatable.component';
import { MatTableModule }  from '@angular/material/table';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule,MatCheckboxModule, MatInputModule} from '@angular/material';
@NgModule({
  declarations: [UserdatadatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
  ],
  exports:[UserdatadatatableComponent,FormsModule,ReactiveFormsModule]
})
export class UserdataModule { }
