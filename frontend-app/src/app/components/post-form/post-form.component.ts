import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  @Input() formTitle: string = '';
  @Input() formSubmitButtonText: string = '';
  @Input() post: Post = new Post();

  @Output() formSubmitted: EventEmitter<Post> = new EventEmitter<Post>();

  submitForm() {
    this.formSubmitted.emit(this.post);
  }
}
