import {NgModule} from "@angular/core";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ServerComponent} from "./servers/server/server.component";
import {ServersComponent} from "./servers/servers.component";
import {UserComponent} from "./users/user/user.component";
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },                     //empty path: localhost:4200
  { path: 'users', component: UsersComponent, children:[
    { path: ':id/:name', component: UserComponent }
  ]},
  { path: 'servers', component: ServersComponent, children:[
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ]},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo:'/not-found'}              //wildcard route means all those routes which are not covered and
                                                      // should be at the last
];

@NgModule({

   imports:[
      RouterModule.forRoot(appRoutes)   //now this will register our routes
  ],
  exports: [RouterModule]     //which thing should be accesible while importing it in another module
})

export class AppRoutingModule {

}
