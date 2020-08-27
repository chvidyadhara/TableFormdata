import { Component, OnInit,ViewChild  ,Inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { MatTableDataSource, MatSort } from '@angular/material';
import { userdata } from 'src/app/userdata';
import { SrvUserService } from 'src/app/srv-user.service';
export interface DialogData {
  animal: string;
  name: string;
}

export interface UsersData {
  name: string;
  id: number;
}
// const ELEMENT_DATA: UsersData[] = [
//   {id: 1560608769632, name: 'Artificial Intelligence'},
//   {id: 1560608796014, name: 'Machine Learning'},
//   {id: 1560608787815, name: 'Robotic Process Automation'},
//   {id: 1560608805101, name: 'Blockchain'}
// ];  
@Component({ 
  selector: 'app-datatabledis',
  templateUrl: './datatabledis.component.html',
  styleUrls: ['./datatabledis.component.css']
})
export class DatatabledisComponent implements OnInit {
  userlist: object;
  ELEMENT_DATA: userdata[];
  displayedColumns: string[] = ['username', 'email', 'phoneno'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  animal: string;
  name: string;

  
  constructor(private srv: SrvUserService,public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  public userdis() {
    this.srv.servdata().subscribe(report => {
      this.dataSource.data = report as userdata[];  
        
    })
  }
  ngOnInit() {
    this.userdis()
  }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}