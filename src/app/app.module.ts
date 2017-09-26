import {HttpModule} from '@angular/http';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AppDescription} from './description.component'
import {AppItems} from './items.component'
import {HttpService} from "./services/http.service";
import {RouterModule, Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path: '', component: AppItems},
  {path: 'description/:id', component: AppDescription}
];

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [HttpService],
  declarations: [AppComponent, AppDescription, AppItems],
  bootstrap: [AppComponent]
})
export class AppModule {
}
