import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
adminUrl='api/admins'
  constructor(private httpClient:HttpClient) { }
  getAllAdmin(){
   return this.httpClient.get(this.adminUrl);
  }
}
