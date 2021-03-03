import { Component, Input, Output,EventEmitter} from '@angular/core';

import {Author,authors} from '../authors.model';
// @Component({
//   selector: 'app-author-detail',
//   template: '<div> {{author.firstName}} <button style="magin-left: 1rem" (click)="select.emit(author)">Select</button>  <button style="margin-left: 1rem" (click)="delete.emit(author.id)">x</button></div>'

// })
@Component({
  selector: `app-author-detail`,
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 1rem" (click)="select.emit(author)">Select</button>
      <button style="margin-left: 1rem" (click)="delete1.emit(author.id)">Delete</button>
    </div>
  `
})
export class AuthorDetailComponent{
  @Input()
  author!: Author;

  @Output() select = new EventEmitter<Author>();
  @Output() delete1 = new EventEmitter<number>();

}
