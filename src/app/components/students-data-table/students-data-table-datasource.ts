import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student } from 'src/app/types/models/Student.type';


const Students: Student[] = [];

export class StudentsDataTableDataSource extends DataSource<Student> {
  data: Student[] = Students;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Student[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Student[]): Student[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Student[]): Student[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'lastName' : return compare(a.lastName, b.lastName, isAsc);
        case 'email' : return compare(a.email, b.email, isAsc);
        case 'birthday' : return compare(a.birthday.toString(), b.birthday.toString(), isAsc);
        default: return 0;
      }
    });
  }
  public filterData(name?: string, lastName?: string, birthday?:Date, email?:string): Student[]{
    return this.data.filter((student:Student, index: number)=>{
      if ( name && !lastName){
        return student.name.includes(name)
      }else if (!name && lastName){
        return student.lastName.includes(lastName)
      }else if (name && lastName){
        return student.name.includes(name) &&  student.name.includes(lastName);
      }else if (!lastName && email){
        return student.lastName.includes(email);
      }else if (!lastName && email){
        return student.lastName.includes(email);
      }else if (lastName && email){
        return student.lastName.includes(lastName) &&  student.lastName.includes(email);
      }
      return student;
      
    })
  }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
