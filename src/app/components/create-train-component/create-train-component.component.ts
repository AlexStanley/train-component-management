import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainComponentService } from 'src/app/services/train-component-service.service';

@Component({
  selector: 'app-create-train-component',
  templateUrl: './create-train-component.component.html',
  styleUrls: ['./create-train-component.component.css'],
})
export class CreateTrainComponentComponent {
  itemForm: FormGroup;
  emptyString = '';

  constructor(
    private formBuilder: FormBuilder,
    private trainComponentService: TrainComponentService,
    private router: Router
  ) {
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      uniqueNumber: ['', Validators.required],
      canAssignQuantity: [false],
    });
  }

  onSubmit() {
    if (this.itemForm.invalid) {
      return;
    }

    this.trainComponentService.create(this.itemForm.value).subscribe(() => {
      this.router.navigate(['/item/list']);
    });
  }
}
