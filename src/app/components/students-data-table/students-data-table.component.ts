import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { StudentService } from 'src/app/services/students/student.service';
import { Student } from 'src/app/types/models/Student.type';
import { StudentsDataTableDataSource } from './students-data-table-datasource';
import {MatDialogRef} from '@angular/material/dialog';
import { RegisterStudentsComponent } from '../register-students/register-students.component';
@Component({
  selector: 'app-students-data-table',
  templateUrl: './students-data-table.component.html',
  styleUrls: ['./students-data-table.component.css']
})
export class StudentsDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Student>;
  dataSource: StudentsDataTableDataSource;


  //Variables para el filtrado
  nameSearch : string = "";
  lastNameSearch: string = "";
  birthdaySearch: Date= new Date();
  emailSearch: string ="";

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'lastName', 'email', 'birthday', 'actions'];

  constructor(private _studentsService: StudentService,private _router: Router, public dialog: MatDialog) {
    this.dataSource = new StudentsDataTableDataSource();
    
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(RegisterStudentsComponent);
  }

  ngAfterViewInit(): void {
    this.allStudents();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public allStudents(){
    let response= this._studentsService.getStudents();
    response.subscribe(report=>this.dataSource.data= report);
  }

  goToStudentDetail(student: any){
    console.log(`students/${student.id}`);
    this._router.navigate([`/students/${student.id}`,student]);
  }
  
  filterData(){
    console.log('First Name Search:', this.nameSearch);
    console.log('Last Name Search:', this.lastNameSearch);
    console.log(' Search:', this.nameSearch);
    this.table.dataSource = this.dataSource.filterData(this.nameSearch, this.lastNameSearch, this.birthdaySearch, this.emailSearch);
  }

 
}
