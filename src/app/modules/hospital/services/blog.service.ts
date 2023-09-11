import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../model/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiHost + 'api/blogs', {
      headers: this.headers,
    });
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(this.apiHost + 'api/blogs/' + id, {
      headers: this.headers,
    });
  }

  deleteBlog(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/blogs/' + id, {
      headers: this.headers,
    });
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/blogs', blog, {
      headers: this.headers,
    });
  }

  updateBlog(blog: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/blogs/' + blog.id, blog, {
      headers: this.headers,
    });
  }
}
