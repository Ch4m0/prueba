import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  user: string;
  email: string;
  firstname: string;
  lastname: string;
  state: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    user: 'simon.castañeda',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'Usuario',
    'Email',
    'Nombres',
    'Apellidos',
    'Activo',
    'Actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  applyFilter(word: string): void {
    let filterValue = word.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return (
        data.user.toLowerCase().includes(filter) ||
        data.email.toLowerCase().includes(filter) ||
        data.firstname.toString() === filter ||
        data.lastname.toString() === filter ||
        data.state.toString() === filter
      );
    };
  }
}
