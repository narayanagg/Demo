import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series.component';
import { ParallelComponent } from './components/parallel.component';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { ChildComponent } from './components/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ParallelComponent,
   
    TemplateFormsComponent,
   
    LifeCycleHooksComponent,
   
    ChildComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [LifeCycleHooksComponent]
})
export class AppModule { }
