import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { WorkComponent } from "./work/work.component";
import { CVComponent } from "./CV/CV.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBqDOzQ-M7Fv0ki2lK4m1XEu_DEA-A2Zms'
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    WorkComponent,
    CVComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
