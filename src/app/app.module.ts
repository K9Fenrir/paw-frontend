import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalApp } from "./helpers/global";
import { LoginComponent } from './login/login.component';
import { LoginService } from "./login/services/login.service";
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UserCreateService } from "./users/users-create/services/user-create.service";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UserListService } from "./users/users-list/services/user-list.service";
import { UsersProfileComponent } from './users/users-profile/users-profile.component';
import { UserProfileService } from "./users/users-profile/services/user-profile.service";
import { NgbActiveModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TagsListComponent } from './tags/tags-list/tags-list.component';
import { TagsListService} from "./tags/tags-list/service/tags-list.service";
import { UserCommonService } from "./users/services/user-common.service";
import { LoonaComponent } from './loona/loona.component';
import { LoonaService } from "./loona/services/loona.service";
import { TagsCreateComponent } from './tags/tags-create/tags-create.component';
import { TagsCreateService } from "./tags/tags-create/services/tags-create.service";
import { TagsViewComponent } from './tags/tags-view/tags-view.component';
import {TagsViewService} from "./tags/tags-view/services/tags-view.service";
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsViewComponent } from './posts/posts-view/posts-view.component';
import {PostCreateService} from "./posts/posts-create/services/posts-create.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersCreateComponent,
    UsersListComponent,
    UsersProfileComponent,
    TagsListComponent,
    LoonaComponent,
    TagsCreateComponent,
    TagsViewComponent,
    PostsCreateComponent,
    PostsListComponent,
    PostsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
      GlobalApp,
      LoginService,
      UserCreateService,
      UserListService,
      UserProfileService,
      TagsListService,
      TagsCreateService,
      TagsViewService,
      PostCreateService,
      UserCommonService,
      NgbActiveModal,
      LoonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
