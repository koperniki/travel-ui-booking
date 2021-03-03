import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
  apiUri : string = "https://travel.neostk.com/bookingapi/";
  constructor(private httpClient: HttpClient) { }

  Update(user: User) : Promise<any> {
    console.log("post");
    return new Promise((resolve, reject) =>{
      this.httpClient.post(this.apiUri+'Booking/update', user).toPromise()
      .then( (data) => {
        resolve(data);
      })
      .catch( (err) => {
        reject(err.status)} )
    });
    
    
  }

  Get(userId: string): Promise<User> {
    return new Promise((resolve, reject) =>{
      this.httpClient.get<User>(this.apiUri + 'Booking?id='+userId).toPromise()
      .then( (data) => {
        resolve(data);
      })
      .catch( (err) => {
        reject(err.status)} )
    });
  }


  public Find(code: string):Promise<string> {
    return new Promise((resolve, reject) =>{
      this.httpClient.get<User>(this.apiUri + 'Booking/find?code='+code).toPromise()
      .then( (data) => {
        resolve(data.id);
      })
      .catch( (err) => {
        reject(err.status)} )
    });
  }

}
