import { Component, OnInit, Input } from '@angular/core';

export interface User {
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
  @Input() user: User = emptyUser;
  disabled: boolean = true;

  statusUser: StatuUser[] = [
    { value: true, viewValue: 'Activo' },
    { value: false, viewValue: 'Inactivo' },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.user, 's');
    if (this.user.action == 'edit' || this.user.action == 'create') {
      this.disabled = false;
    } else {
      this.user = emptyUser;
    }
  }
}
