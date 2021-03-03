import { Component, Input ,VERSION} from "@angular/core";

@Component({
  selector: "app-hello",
  template: ` <h2 >Hello {{name}}!</h2>
              <h3>Your name: {{ user.name }}</h3>
              <p>Your age: {{ user.age }}</p>
              <button (click)="showInfo()">Click me!</button>

              <!-- <div *ngIf="user.age > 13 ; else noPG13">
                Ok con cho nguyen minh buoi
              </div>
              <ng-template #noPG13>
                <div>
                  Djt me nguyen minh buoi
                </div>
              </ng-template> -->
              <div *ngFor="let author of authors">
                {{author.id}} - {{author.firstName}} {{author.lastName}}
                - {{author.email}}
</div>

<div *ngFor="let author of authors; index as idx; count as total">
  ({{idx}})/({{total}}): {{author.id}} - {{author.firstName}}
  {{author.lastName}}
</div>`,
})
export class HelloComponent {
  //name = 'Angular ' + VERSION.major;
  @Input() name!: string;
  showInfo(){
    alert("Inside Angular");
  }



  user = {
    name : "lap",
    age: "20"
  }
  authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];

}
