import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RxFormBuilder, FormGroupExtension } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-control-form',
  templateUrl: './control-form.component.html',
  styleUrls: ['./control-form.component.scss']
})
export class ControlFormComponent implements OnInit {

  entityForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.entityForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      fieldName: ['', Validators.required],
      top: ['', Validators.required],
      left: ['', Validators.required],

    });
  }

  @Output() create: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }


  resetValue() {
    this.entityForm.reset();
  }

  onSubmit() {
    this.create.emit(this.entityForm.value)
  }
}
