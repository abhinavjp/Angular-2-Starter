export class ValidatorError{
    required: boolean;
    minlength: {
        actualLength: number;
        requiredLength: number;
    };
    maxlength: {
        actualLength: number;
        requiredLength: number;
    };
}