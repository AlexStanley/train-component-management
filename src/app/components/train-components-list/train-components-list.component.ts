import { Component, OnInit } from '@angular/core';
import { TrainComponentService } from 'src/app/services/train-component-service.service';

@Component({
  selector: 'app-train-components-list',
  templateUrl: './train-components-list.component.html',
  styleUrls: ['./train-components-list.component.css'],
})
export class TrainComponentsListComponent implements OnInit {
  items: any[] = [];

  constructor(private trainComponentService: TrainComponentService) {}

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
}
