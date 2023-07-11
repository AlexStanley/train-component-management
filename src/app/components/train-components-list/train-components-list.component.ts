import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainComponentManagementService } from 'src/app/services/train-component-management.service';
import { TrainComponentService } from 'src/app/services/train-component-service.service';

@Component({
  selector: 'app-train-components-list',
  templateUrl: './train-components-list.component.html',
  styleUrls: ['./train-components-list.component.css'],
})
export class TrainComponentsListComponent implements OnInit {
  items: any[] = [];

  constructor(
    private trainComponentService: TrainComponentService,
    private router: Router,
    private trainComponentManagementService: TrainComponentManagementService
  ) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.trainComponentService.getAll().subscribe((items) => {
      this.items = items;
    });
  }

  onDelete(itemId: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.trainComponentService.delete(itemId).subscribe(() => {
        this.fetchItems();
      });
    }
  }

  onRemoveFromHierarchy(itemId: number): void {
    if (
      confirm('Are you sure if you want to remove this item from hierarchy?')
    ) {
      this.trainComponentManagementService.delete(itemId).subscribe(() => {
        this.router.navigate(['/hierarchy']);
      });
    }
  }
}
