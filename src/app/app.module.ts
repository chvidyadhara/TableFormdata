import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataModule } from './userdata/userdata.module';
import { SrvUserService } from './srv-user.service';
import { DatatableModule } from './datatable/datatable.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserdataModule,
    DatatableModule,
   


  ],
  providers: [SrvUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
