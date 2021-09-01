import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog-tesouraria',
  templateUrl: './form-dialog-tesouraria.component.html',
  styleUrls: ['./form-dialog-tesouraria.component.css']
})
export class FormDialogTesourariaComponent implements OnInit {

  public formularioTesouraria!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormDialogTesourariaComponent>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
