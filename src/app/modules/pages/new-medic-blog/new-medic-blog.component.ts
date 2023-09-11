import { Component, OnInit } from '@angular/core';
import { UserService } from '../../hospital/services/user.service';
import { BlogService } from '../../hospital/services/blog.service';
import { User } from '../../hospital/model/user.model';

@Component({
  selector: 'app-new-medic-blog',
  templateUrl: './new-medic-blog.component.html',
  styleUrls: ['./new-medic-blog.component.css'],
})
export class NewMedicBlogComponent implements OnInit {
  blogTitle: string = '';
  blogText: string = '';
  writerJmbg: number | null = null;

  constructor(
    private userService: UserService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.getWriterJmbgFromLoggedInUser();
  }

  private getWriterJmbgFromLoggedInUser(): void {
    const loggedInUser: User | null = this.userService.getLoggedInUser();
    if (loggedInUser?.jmbg) {
      this.writerJmbg = loggedInUser.jmbg;
    }
  }

  createBlogPost(): void {
    if (this.writerJmbg !== null) {
      const newBlogPost = {
        writerJmbg: this.writerJmbg,
        title: this.blogTitle, // Use the blogTitle property
        text: this.blogText, // Use the blogText property
      };

      this.blogService.createBlog(newBlogPost).subscribe(
        (response) => {
          console.log('Blog post created successfully:', response);
          // Handle success as needed (e.g., navigate to a different page)
        },
        (error) => {
          console.error('Error creating blog post:', error);
          // Handle errors as needed
        }
      );
    } else {
      console.error('Writer JMBG is not available.');
    }
  }
}
