import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'admin-order',
  styleUrls: ['admin-order.component.css'],
  templateUrl: 'admin-order.component.html',
})
export class AdminOrderComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'username',
    'first_name',
    'last_name',
    'phone',
    'location',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor(private http: HttpClient) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getuser();
  }
  getuser() {
    this.http.get('http://localhost:3000/user/all').subscribe((data) => {
      console.log(data, 'ddddddddddddd');
      // this.dataSource = new MatTableDataSource<PeriodicElement>(data);
    });
  }
}

export interface PeriodicElement {
  username: string;
  first_name: String;
  last_name: String;
  phone: Number;
  location: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    username: 'oussama',
    first_name: 'medfai',
    last_name: 'oussama',
    phone: 555555,
    location: 'tunis',
  },
];
