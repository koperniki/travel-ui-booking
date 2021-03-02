import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/user';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent implements OnInit {
  userId = '';
  buttonText = 'Отправить'
  user!: User;
  constructor(private apiService : ApiService,  private activeRoute: ActivatedRoute) { }
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
    act1: new FormControl(false),
    act2: new FormControl(false),
    act3: new FormControl(false),
    actOther: new FormControl(''),
    eat1: new FormControl(false),
    eat2: new FormControl(false),
    eat3: new FormControl(false),
    eat4: new FormControl(false),
    eat5: new FormControl(false),
    eat6: new FormControl(false),
    eatOther: new FormControl(''),
    drink1: new FormControl(false),
    drink2: new FormControl(false),
    drink3: new FormControl(false),
    drink4: new FormControl(false),
    drinkOther: new FormControl(''),
    alco1: new FormControl(false),
    alco2: new FormControl(false),
    alco3: new FormControl(false),
    alco4: new FormControl(false),
    alco5: new FormControl(false),
    alcoOther: new FormControl(''),
  })
 
  ngOnInit(): void {


    this.activeRoute.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.apiService.Get(this.userId).then((usr)=>{
        this.user = usr;
        this.profileForm.setValue(this.user);
      });
    });

  }
  onSubmit() {

    console.log(this.profileForm.value);
    this.apiService.Update(this.profileForm.value).then(()=> {
      this.buttonText='Отправлено'
    })
    .catch(()=>{
      this.buttonText='Ошибка... Попробуйте позже'
    }) 
  }
}
