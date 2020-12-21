import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'username',
    'first_name',
    'last_name',
    'phone',
    'location',
    'actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  constructor(private http: HttpClient) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getuser();
  }
  getuser() {
    this.http.get('http://localhost:3000/user/all').subscribe((data: []) => {
      console.log(data, 'ddddddddddddd');

      var res = [];
      for (var i = 0; i < data.length; i++) {
        res.push({
          id: data[i]['_id'],
          username: data[i]['username'],
          first_name: data[i]['first_name'],
          last_name: data[i]['last_name'],
          phone: data[i]['phone'],
          location: data[i]['location'],
        });
      }
      var sour: PeriodicElement[] = res;
      this.dataSource = new MatTableDataSource<PeriodicElement>(sour);
    });
  }
  getid(x) {
    this.http.get(`http://localhost:3000/user/ban/${x}`).subscribe((res) => {
      console.log(res);
    });
  }
}

export interface PeriodicElement {
  id: String;
  username: string;
  first_name: String;
  last_name: String;
  phone: Number;

  location: String;
}
