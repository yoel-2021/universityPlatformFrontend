import { Component, Inject, OnInit } from '@angular/core';
import { StudentsDetailPageComponent } from 'src/app/pages/students-detail-page/students-detail-page.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete-students',
  templateUrl: './dialog-delete-students.component.html',
  styleUrls: ['./dialog-delete-students.component.css']
})
export class DialogDeleteStudentsComponent implements OnInit {
  
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<StudentsDetailPageComponent >,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel, private _studentDelete: StudentsDetailPageComponent) {
    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit() {
  }
  onCommand(): void {
    console.log("Hola")
    this.dialogRef.close(true);
  }
  onDelete(): void {
    this.dialogRef.close(false);
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}