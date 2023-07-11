import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainComponentComponent } from './components/create-train-component/create-train-component.component';
import { TrainComponentsListComponent } from './components/train-components-list/train-components-list.component';
import { EditTrainComponentComponent } from './components/edit-train-component/edit-train-component.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { AssignQuantityComponent } from './components/assign-quantity/assign-quantity.component';
import { ManageHierarchyComponent } from './components/manage-hierarchy/manage-hierarchy.component';

const routes: Routes = [
  { path: 'item/list', component: TrainComponentsListComponent },
  { path: 'item/create', component: CreateTrainComponentComponent },
  { path: 'item/edit/:id', component: EditTrainComponentComponent },
  { path: 'hierarchy', component: HierarchyComponent },
  {
    path: 'item/list/assign-quantity/:id',
    component: AssignQuantityComponent,
  },
  {
    path: 'item/list/manage-hierarchy/:id',
    component: ManageHierarchyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
