import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series.component';
import { ParallelComponent } from './components/parallel.component';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';
import { ChildComponent } from './components/child.component';
import { ReactivefromsComponent } from './components/reactivefroms.component';
import { TranslatorComponent } from './components/translator.component';
import { InteractionComponent } from './components/interaction/interaction.component';
import { ParentComponent } from './parent/parent.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ChildexpComponent } from './childexp/childexp.component';
import { ParentexpComponent } from './parentexp/parentexp.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ParallelComponent,
   
    TemplateFormsComponent,
   
    LifeCycleHooksComponent,
   
    ChildComponent,
   
    ReactivefromsComponent,
   
    TranslatorComponent,
   
    InteractionComponent,
   
    ParentComponent,
   
    ChildcompComponent,
   
    ChildexpComponent,
   
    ParentexpComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ReactivefromsComponent]
})
export class AppModule { }
