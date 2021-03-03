import { Component, OnInit } from '@angular/core';
import {authors, Author} from '../authors.model';
@Component({
  selector: 'app-author-list',
  template: '<app-author-detail *ngFor="let author of authors" [author] = "author" (select)="onSelected($event)" (delete1)="onDelete($event)"></app-author-detail> <br>  <div>current select: {{currentAuthor?.firstName}}</div>'
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(seclectedAuthor: Author){
    this.currentAuthor = seclectedAuthor;
  };

  onDelete(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
  constructor() {}

  ngOnInit(): void {
  }

}
