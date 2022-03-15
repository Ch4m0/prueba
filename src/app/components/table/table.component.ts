import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  id: number;
  user: string;
  email: string;
  firstname: string;
  lastname: string;
  state: boolean;
  action?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    user: 'simon.castañeda',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 2,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 3,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 4,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 5,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 6,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 7,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 8,
    user: 'abner.chamorro',
    email: 'abnercd93@gmail.com',
    firstname: 'Abner',
    lastname: 'chamorro',
    state: true,
  },
  {
    id: 9,
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

  constructor(public dialog: MatDialog) {}

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
    console.log(this.dataSource, 'DATASOURCE');
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

  addUser(user: PeriodicElement) {
    let data = this.dataSource.data;
    data.unshift(user);
    this.dataSource.data = data;
    console.log(this.dataSource);
    console.log(this.dataSource.data);
  }

  updateUser(user: PeriodicElement) {
    let data = this.dataSource.data;
    var foundIndex = data.findIndex((x) => x.id == user.id);
    data[foundIndex] = user;
    this.dataSource.data = data;
  }

  handleShowOrUpdate(element: any, typeAction: string): void {
    element.action = typeAction;
    console.log(element);
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '60%',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      switch (result.action) {
        case 'create':
          this.addUser(result);
          break;
        case 'edit':
          this.updateUser(result);
          break;
      }
    });
  }
}
