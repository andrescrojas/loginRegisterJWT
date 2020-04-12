import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MeData } from '../me/me.interface';
import { RegisterData, RegisterResult, RegisterResultado } from './register.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  operation: number;
  message: string;
  register: RegisterData = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private api: ApiService) { }

  ngOnInit(): void {
    this.auth.start();
  }

  save() {
    this.api.register(this.register).subscribe(({data}) => {
      console.log(data);
      const userResult: RegisterResultado = JSON.parse(JSON.stringify(data));
      if (userResult.register.status) {
        this.operation = 1;
      } else {
        this.operation = 2;
      }
      this.message = userResult.register.message;
    }, (error) => {
      console.log('error enviando el mutation: ', error);
      this.operation = 3;
      this.message = 'Error inesperado';
    });
  }
}
