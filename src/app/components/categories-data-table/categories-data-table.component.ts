import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/types/models/Category.type';
import { CategoriesDataTableDataSource,} from './categories-data-table-datasource';

@Component({
  selector: 'app-categories-data-table',
  templateUrl: './categories-data-table.component.html',
  styleUrls: ['./categories-data-table.component.css']
})
export class CategoriesDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Category>;
  dataSource: CategoriesDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'categotyName', 'actions'];

  //Variables para el filtrado
  nameSearch : string = "";
  

  constructor(private _categoriesService: CategoriesService,private _router: Router,) {
    this.dataSource = new CategoriesDataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.allCategories();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  public allCategories(){
    let response= this._categoriesService.getCategories();
    response.subscribe(report=>this.dataSource.data= report);
  }

  goToCategoryDetail(category: any){
    console.log(`categories/${category.id}`);
    this._router.navigate([`/categories/${category.id}`,category]);
  }
  
  filterData(){
    console.log(' Search:', this.nameSearch);
    this.table.dataSource = this.dataSource.filterData(this.nameSearch);
  }
}
