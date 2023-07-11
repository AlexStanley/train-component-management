import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HierarchyElement } from 'src/app/models/HierarchyElement';
import { TrainComponentManagementService } from 'src/app/services/train-component-management.service';

@Component({
  selector: 'app-manage-hierarchy',
  templateUrl: './manage-hierarchy.component.html',
  styleUrls: ['./manage-hierarchy.component.css'],
})
export class ManageHierarchyComponent {
  itemForm: FormGroup | any;
  isUpdate: boolean = false;
  itemId: number | any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: TrainComponentManagementService
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');

    this.itemForm = this.formBuilder.group({
      childComponentID: [''],
      parentComponentID: ['', Validators.required],
    });

    this.dataService
      .getItem(this.itemId)
      .subscribe((item: HierarchyElement) => {
        if (item != null) {
          this.isUpdate = true;
          this.itemForm.patchValue(item);
        } else {
          this.itemForm.patchValue({ childComponentID: this.itemId });
        }
      });

    this.itemForm.get('childComponentID')?.disable();
  }

  saveItem(): void {
    if (this.itemForm.invalid) {
      return;
    }

    const item: HierarchyElement = {
      childComponentID: this.itemId,
      parentComponentID: this.itemForm.value.parentComponentID,
    };

    if (this.isUpdate) {
      this.dataService
        .update(item.childComponentID, item.parentComponentID)
        .subscribe(() => {
          this.router.navigate(['/hierarchy']);
        });
    } else {
      this.dataService
        .create(item.parentComponentID, item.childComponentID)
        .subscribe(() => {
          this.router.navigate(['/hierarchy']);
        });
    }
  }
}
