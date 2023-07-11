import { Component } from '@angular/core';
import { Element } from 'src/app/models/Element';
import { TrainComponentManagementService } from 'src/app/services/train-component-management.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css'],
})
export class HierarchyComponent {
  elements: Element[] = [];

  constructor(
    private trainComponentManagementService: TrainComponentManagementService
  ) {}

  ngOnInit(): void {
    this.trainComponentManagementService.getHierarchy().subscribe((items) => {
      this.elements = items;
    });
  }
}
