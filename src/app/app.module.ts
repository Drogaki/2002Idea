import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { IdeasService } from "./@shared/ideas.service";
import { AccountsService } from './@shared/accounts.service';

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { ShareIdeaComponent } from "./share-idea/share-idea.component";
import { ShowIdeasComponent } from "./show-ideas/show-ideas.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { LogInComponent } from './log-in/log-in.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "share-idea", component: ShareIdeaComponent },
  { path: "show-ideas", component: ShowIdeasComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "log-in", component: LogInComponent },
  { path: "user", component: UserComponent }
];

//const rout: Routes= [
//  { path : 'boite', component:UwU},
//]
//RouteModule.forRoot(rout)
//<router-outlet>
//<a routerLink="boite">

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShareIdeaComponent,
    ShowIdeasComponent,
    SignUpComponent,
    LogInComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  providers: [IdeasService, AccountsService]
})
export class AppModule {}
