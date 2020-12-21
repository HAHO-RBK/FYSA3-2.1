import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
declare var M: any;
export class Employee {
  _id: string;
  name: string;
  img: string;
}

@Component({
  selector: 'app-profadd',
  templateUrl: './profadd.component.html',
  styleUrls: ['./profadd.component.css'],
})
export class ProfaddComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Employee[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.selectedEmployee = {
      _id: '',
      name: '',
      img: '',
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.http
        .post('http://localhost:3000/api/profs', form.value)
        .subscribe((res) => {
          this.resetForm(form);
          this.refreshEmployeeList();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
        });
    } else {
      this.http
        .put(`http://localhost:3000/api/profs/${form.value._id}`, form.value)
        .subscribe((res) => {
          this.resetForm(form);
          this.refreshEmployeeList();
          M.toast({ html: 'Updated successfully', classes: 'rounded' });
        });
    }
  }

  refreshEmployeeList() {
    this.http.get('http://localhost:3000/api/profs').subscribe((res) => {
      this.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this profission ?') == true) {
      this.http
        .delete(`http://localhost:3000/api/profs/${_id}`)
        .subscribe((res) => {
          this.refreshEmployeeList();
          this.resetForm(form);
          M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        });
    }
  }
}
