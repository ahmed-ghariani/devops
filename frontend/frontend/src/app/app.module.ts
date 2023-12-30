import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { AwnserDetailsComponent } from './awnser-details/awnser-details.component';
import { AwnsersListComponent } from './awnsers-list/awnsers-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionDetailsComponent,
    AwnserDetailsComponent,
    AwnsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
