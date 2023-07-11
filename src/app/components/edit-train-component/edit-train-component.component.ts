import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { TrainComponentService } from 'src/app/services/train-component-service.service';

@Component({
  selector: 'app-edit-train-component',
  templateUrl: './edit-train-component.component.html',
  styleUrls: ['./edit-train-component.component.css'],
})
export class EditTrainComponentComponent {
  itemId: number | any;
  itemForm: FormGroup | any;
  emptyString = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private trainComponentService: TrainComponentService
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.buildItemForm();
    this.fetchItem();
  }

  buildItemForm(): void {
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      uniqueNumber: ['', Validators.required],
      canAssignQuantity: [false],
    });
  }

  fetchItem(): void {
    this.trainComponentService.getById(this.itemId).subscribe((item: Item) => {
      this.itemForm.patchValue(item);
    });
  }

  onSubmit(): void {
    if (this.itemForm.invalid) {
      return;
    }

    const updatedItem: Item = {
      id: this.itemId,
      ...this.itemForm.value,
    };

    this.trainComponentService
      .update(this.itemId, updatedItem)
      .subscribe(() => {
        this.router.navigate(['/item/list']);
      });
  }
}
