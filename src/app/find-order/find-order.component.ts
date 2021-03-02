import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent implements OnInit {

  constructor(private apiService : ApiService,  private router: Router) { }
  notFound : boolean = true;
  code = new FormControl('', [Validators.required]);
  ngOnInit(): void {
  }

  onFind(code: string){
    this.apiService.Find(code)
    .then((id)=>
      {
        console.log(id);
        this.router.navigateByUrl('/manage-order?id=' + id);
      } )
    .catch((code)=>{
      console.log(code)
      if (code == 404) {
        this.notFound = true;
        this.code.patchValue('');
      }
    })  
  }
}
