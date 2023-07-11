import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignQuantity } from 'src/app/models/AssignQuantity';
import { TrainComponentAssignQuantityService } from 'src/app/services/train-component-assign-quantity.service';

@Component({
  selector: 'app-assign-quantity',
  templateUrl: './assign-quantity.component.html',
  styleUrls: ['./assign-quantity.component.css'],
})
export class AssignQuantityComponent {
  id: number | any;
  itemId: number | any;
  itemForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private trainComponentAssignQuantityService: TrainComponentAssignQuantityService
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.buildItemForm();
    this.fetchItem();
  }

  buildItemForm(): void {
    this.itemForm = this.formBuilder.group({
      id: [''],
      quantity: [''],
      trainComponentID: [''],
    });
  }

  fetchItem(): void {
    this.trainComponentAssignQuantityService
      .getElementById(this.itemId)
      .subscribe((item: AssignQuantity) => {
        this.id = item.id;
        this.itemForm.patchValue(item);
      });
  }

  onSubmit() {
    if (this.itemForm.invalid) {
      return;
    }

    const updatedItem: AssignQuantity = {
      id: this.id,
      ...this.itemForm.value,
      trainComponentID: this.itemId,
    };

    this.trainComponentAssignQuantityService
      .assignQuantity(updatedItem)
      .subscribe(() => {
        this.router.navigate(['/item/list']);
      });
  }
}
