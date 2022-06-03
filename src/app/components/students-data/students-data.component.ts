import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Student } from 'src/app/types/models/Student.type';
@Component({
  selector: 'app-students-data',
  templateUrl: './students-data.component.html',
  styleUrls: ['./students-data.component.css']
})
export class StudentsDataComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email'];
  exampleDatabase!: ExampleHttpDatabase | null ;
  data: GithubIssue[] = [];
 
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _httpClient: HttpClient, private _storageService: StorageService) { }
  ngAfterViewInit(): void {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient, this._storageService);

    
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  id: number;
  name: string;
  lastName: string;
  email: string;
}
  /** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient, private _storageService: StorageService) {}

  getStudents():Observable<Student[]>{
    let token = this._storageService.getStorage('jwtToken');
    return this._httpClient.get<Student[]>('https://localhost:7248/api/Students',{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`
      }
      )
    });
   }
}

 

