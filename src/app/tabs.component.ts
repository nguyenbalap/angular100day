import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'tab-container',
    template: `
    <ul class="nav nav-tabs my-4 mx-4">
        <li class="nav-item" *ngFor="let link of navs">
            <a class="nav-link" href="#">
                <ng-container *ngIf="linkTemplate; else noTemplate"></ng-container>
                    <ng-container [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{ link: link}"></ng-container>
                
                <ng-template #noTemplate>
                    {{ link }}
                </ng-template>
            </a>
</li>
    </ul>
    `
  })
  export class TabContainerComponent {
      @Input() navs: string[] | undefined; // Custom template provided by parent
      @Input()
    linkTemplate!: TemplateRef<any>;

  }