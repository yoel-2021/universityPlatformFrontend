import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { Course } from 'src/app/types/models/Course.type';
import { CoursesDataTableDataSource} from './courses-data-table-datasource';

@Component({
  selector: 'app-courses-data-table',
  templateUrl: './courses-data-table.component.html',
  styleUrls: ['./courses-data-table.component.css']
})
export class CoursesDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Course>;
  dataSource: CoursesDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','index','actions'];


  //Variables para el filtrado
  nameSearch : string = "";
  

  constructor(private _coursesService: CoursesService,private _router: Router,) {
    this.dataSource = new CoursesDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.allCourses();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  public allCourses(){
    let response= this._coursesService.getCourses();
    response.subscribe(report=>this.dataSource.data= report);
  }

  goToCourseDetail(course: any){
    console.log(`courses/${course.id}`);
    this._router.navigate([`/courses/${course.id}`,course]);
  }
  
  filterData(){
    console.log(' Search:', this.nameSearch);
    this.table.dataSource = this.dataSource.filterData(this.nameSearch);
  }
}
