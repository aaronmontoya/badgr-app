import statements

@Component({
	selector: 'bg-formfield-text',

	host: {
		'class': 'forminput',
		'[class.forminput-is-error]': 'isErrorState',
		'[class.forminput-locked]': 'isLockedState',
		'[class.forminput-monospaced]': 'monospaced',
        '[class.forminput-withbutton]': 'hasbutton',
		'[class.forminput-withsublabel]': 'sublabel'
	},
    template: `
		<div class="forminput-x-labelrow">
			<label class="forminput-x-label" [attr.for]="inputName" *ngIf="label || includeLabelAsWrapper">
				{{ label }}  <span *ngIf="optional">(OPTIONAL)</span>
				<span *ngIf="formFieldAside">{{ formFieldAside }}</span>
				<button type="button" *ngIf="isLockedState" (click)="unlock()">(unlock)</button>
			</label>
        	<ng-content select="[label-additions]"></ng-content>
        </div>
		<p class="forminput-x-sublabel" *ngIf="sublabel"><span *ngIf="remainingCharactersNum >= 0">{{ remainingCharactersNum }}</span>{{ sublabel }}</p>

        <label class="visuallyhidden" [attr.for]="inputName" *ngIf="ariaLabel">{{ ariaLabel }}</label>
		<div class="forminput-x-inputs">
			<input [type]="fieldType"
			       *ngIf="! multiline"
			       [name]="inputName"
			       [id]="inputId"
			       [formControl]="control"
			       [placeholder]="placeholder || ''"
			       [maxlength] = "maxchar"
			       (change)="postProcessInput()"
			       (focus)="cacheControlState()"
			       (keypress)="handleKeyPress($event)"
			       (keyup)="handleKeyUp($event)"
			       #textInput
			/>
			<div class="forminput-x-button" *ngIf="hasbutton">
				<button class="button button-secondary button-informinput"
				        (click)="buttonClicked.emit($event)"
				        [disabled-when-requesting]="true"
				        type="submit"
				>
					Add
				</button>
			</div>
			<textarea *ngIf="multiline"
			          [name]="inputName"
			          [id]="inputId"
			          [formControl]="control"
			          [maxlength] = "maxchar"
			          [placeholder]="placeholder || ''"
			          (change)="postProcessInput()"
			          (focus)="cacheControlState()"
			          (keypress)="handleKeyPress($event)"
			          (keyup)="handleKeyUp($event)"
			          #textareaInput
			></textarea>
		</div>
		<p class="forminput-x-error" *ngIf="isErrorState">{{ errorMessageForDisplay }}</p>
	`
})
export class FormFieldText implements OnChanges, AfterViewInit {
	@Input() control: FormControl;
	@Input() initialValue: string;
	@Input() id: string;
	@Input() label: string;
	@Input() ariaLabel: string;
	@Input() includeLabelAsWrapper: boolean = false; //includes label for layout purposes even if label text wasn't passed in.
	@Input() formFieldAside: string; //Displays additional text above the field. I.E (optional)
	@Input() errorMessage: CustomValidatorMessages;
	@Input() multiline: boolean = false;
    @Input() monospaced: boolean = false;
    @Input() sublabel: string;
	@Input() placeholder: string;
	@Input() fieldType: FormFieldTextInputType = 'text';
	@Input() optional: boolean = false;
	@Input() hasbutton: boolean = false;
	@Input() maxchar: number;

	Additional Input/Output declarations

	remainingCharactersNum = this.maxchar;

	ngOnInit() {
		if (this.maxchar) {
			this.remainingCharactersNum = this.maxchar - this.control.value.length;
		}
	}

	handleKeyUp(event: KeyboardEvent) {
		this.remainingCharactersNum = this.maxchar - this.control.value.length;
	}

	Component functions
}