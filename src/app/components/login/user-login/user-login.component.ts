import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  constructor(protected authService: AuthService) {
    
    this.myForm.addControl('name',this.name);
  }
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  

  submit(){
    let newUser = {
      id: "1",
      name: this.name.value,
    }
    // this.cartService.submit(newItem);
  }
}
