import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ResolverResolver } from './resolver.resolver';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "users", resolve:{data: ResolverResolver}, component: UsersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ResolverResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
