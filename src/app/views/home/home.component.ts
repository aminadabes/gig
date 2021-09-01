import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogMembrosComponent } from '../form-dialog-membros/form-dialog-membros.component';
import { FormDialogTesourariaComponent } from '../form-dialog-tesouraria/form-dialog-tesouraria.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addMembro(): void {
  console.log("aminadabes");
    const dialogRef = this.dialog.open(FormDialogMembrosComponent, {
      // maxHeight: '95vh',
      minWidth: '400px',
      // width: '25vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // window.location.reload();
    });
  }

  openTesouraria(): void {
    const dialogRef = this.dialog.open(FormDialogTesourariaComponent, {
      width: '250px',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


}
