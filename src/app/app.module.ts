import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AuthorDetailComponent } from './authors/author-detail.component';

import { ToggleComponent } from './toggle/toggle.component';
import { TabContainerComponent } from './tabs.component';
import { TestTypeScript } from './indexx';
import {CartService, CartExtService, Product} from "./index1";
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelContentDirective } from './tab-panel-content.directive';
import { BsTabGroupComponent } from './bs-tab-group/bs-tab-group.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    TabContainerComponent,
    TestTypeScript,
    Product,
    TabPanelComponent,
    TabGroupComponent,
    TabPanelContentDirective,
    BsTabGroupComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
