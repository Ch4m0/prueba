import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

export interface User {
  id: number;
  user: string;
  email: string;
  firstname: string;
  lastname: string;
  state: boolean;
  action?: string;
}
interface StatuUser {
  value: boolean;
  viewValue: string;
}

const emptyUser = {
  id: 0,
  user: '',
  email: '',
  firstname: '',
  lastname: '',
  state: true,
};
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Input() user: User;
  disabled: boolean = true;

  statusUser: StatuUser[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Inactivo' },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.user, 's');

    if (this.user.action == 'show') {
      this.disabled = true;
      return;
    }

    if (this.user.action == 'edit') {
      this.disabled = false;
    } else {
      this.user = emptyUser;
    }
  }
}
