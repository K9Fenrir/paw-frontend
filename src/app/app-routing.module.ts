import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { UsersCreateComponent } from "./users/users-create/users-create.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { UsersProfileComponent } from "./users/users-profile/users-profile.component";
import {TagsListComponent} from "./tags/tags-list/tags-list.component";
import {LoonaComponent} from "./loona/loona.component";
import {TagsCreateComponent} from "./tags/tags-create/tags-create.component";
import {TagsViewComponent} from "./tags/tags-view/tags-view.component";
import {PostsCreateComponent} from "./posts/posts-create/posts-create.component";

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: UsersCreateComponent },
    { path: "users", component: UsersListComponent },
    { path: "users/:username", component: UsersProfileComponent},
    { path: "tags", component: TagsListComponent },
    { path: "tags/create", component: TagsCreateComponent},
    { path: "tags/view/:tag", component: TagsViewComponent },
    { path: "loona", component: LoonaComponent },
    { path: "posts/create", component: PostsCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
