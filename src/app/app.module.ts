import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponentsListComponent } from './components/train-components-list/train-components-list.component';
import { CreateTrainComponentComponent } from './components/create-train-component/create-train-component.component';
import { EditTrainComponentComponent } from './components/edit-train-component/edit-train-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageHierarchyComponent } from './components/manage-hierarchy/manage-hierarchy.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { ChildComponent } from './components/child/child.component';
import { AssignQuantityComponent } from './components/assign-quantity/assign-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainComponentsListComponent,
    CreateTrainComponentComponent,
    EditTrainComponentComponent,
    ManageHierarchyComponent,
    HierarchyComponent,
    ChildComponent,
    AssignQuantityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
