import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { TodoContainerComponent } from './todo-container/todo-container.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoDataService } from './todo-data.service';
@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
