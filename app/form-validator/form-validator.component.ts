import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidatorError } from './form-validator.classes';

@Component({
    selector: 'f-validate',
    templateUrl: './app/form-validator/form-validator.component.html',
    styleUrls: ['./app/form-validator/form-validator.component.css']
})
export class FormValidatorComponent implements OnInit, DoCheck {
    @Input() control: FormControl
    @Input() controlName: string
    isInvalid: boolean = false;
    message: string;
    constructor() {
        if (!this.isNullOrUndefined(this.control)) {
            this.getErrors(this.control.errors as ValidatorError, this.controlName);
        }
    }

    ngDoCheck() {
        if (!this.isNullOrUndefined(this.control) && this.control.invalid) {
            this.getErrors(this.control.errors as ValidatorError, this.controlName);
        } else{
            this.isInvalid = false;
        }
    }

    ngOnInit() {
    }

    isNullOrUndefined = <T>(tObj: T) => {
        return tObj == null || tObj == undefined;
    }

    private getErrors(errors: ValidatorError, fieldName: string) {
        if (errors != null && errors != undefined) {
            if (!this.isNullOrUndefined(errors.required) && errors.required) {
                this.message = fieldName + " is required";
            }
            if (!this.isNullOrUndefined(errors.maxlength) && (errors.maxlength.actualLength >= errors.maxlength.requiredLength)) {
                this.message = fieldName + " exceeds max limit of " + errors.maxlength.requiredLength + " characters";
            }
            if (!this.isNullOrUndefined(errors.minlength) && (errors.minlength.actualLength <= errors.minlength.requiredLength)) {
                this.message = fieldName + " doesn't meet min limit of " + errors.minlength.requiredLength + " characters";
            }
        }
        if (!this.isNullOrUndefined(this.message) && this.control.touched) {
            this.isInvalid = true;
        }
    }
}