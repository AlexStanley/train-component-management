import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTrainComponentComponent } from './components/create-train-component/create-train-component.component';
import { TrainComponentsListComponent } from './components/train-components-list/train-components-list.component';
import { EditTrainComponentComponent } from './components/edit-train-component/edit-train-component.component';

const routes: Routes = [
  { path: 'item/list', component: TrainComponentsListComponent },
  { path: 'item/create', component: CreateTrainComponentComponent },
  { path: 'item/edit/:id', component: EditTrainComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
