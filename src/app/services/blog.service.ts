import { Injectable } from '@angular/core';
import { BlogData } from 'models/blogData';
import{ environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseURL:string = ""
  private blogData:BlogData | any

  constructor(private http:HttpClient) {
    this.baseURL = environment.blogApi
   }
}
