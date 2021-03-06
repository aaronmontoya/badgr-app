import statements

@Component({
	selector: 'create-recipient-badge-collection',
	template: `
		<main>
			<form-message></form-message>
            <header class="l-containerxaxis topbar">
				<h3 class="topbar-x-heading">Add Badge Collection</h3>
				<p class="topbar-x-subheading">Adding a collection allows your to organize your badges.</p>
			</header>
            <div class="l-containerxaxis u-margin-yaxis3x u-width-formsmall">
                <form [formGroup]="badgeCollectionForm"
				      (ngSubmit)="onSubmit(badgeCollectionForm.value)"
				      novalidate>
                    <fieldset
                        aria-labelledby="heading-add-badge-collection"
                        role="group">
                        <legend class="visuallyhidden" id="heading-add-badge-collection">Add Badge Collection</legend>
                            <bg-formfield-text
                                           [control]="badgeCollectionForm.controls.collectionName"
						                   [label]="'Name'"
                                           [maxchar]=128
						                   [errorMessage]="{required:'Please enter a collection name'}"
                                           [autofocus]="true"
                                           [sublabel]="' remaining characters'">
	                    </bg-formfield-text>
                        <div class="u-margin-top2x">
							<bg-formfield-text
								           [control]="badgeCollectionForm.controls.collectionDescription"
						                   [label]="'Description'"
					                       [errorMessage]="{required: 'Please enter a description'}"
                                           [maxchar]=255
                                           [multiline]="true"
                                           [sublabel]="' remaining characters'">
                        </bg-formfield-text>
                        </div>
						<div class="l-flex l-flex-1x l-flex-justifyend u-margin-top2x">
                            <a [routerLink]="['/recipient/badge-collections']"
                                class="button button-secondary"
							    class="button button-primaryghost"
							    [disabled-when-requesting]="true"
							>Cancel</a>
							<button type="submit"
							        class="button"
							        [disabled]="!! createCollectionPromise"
							        (click)="clickSubmit($event)"
							        [loading-promises]="[ createCollectionPromise ]"
							        loading-message="Adding"
							>Add Collection</button>
						</div>
					</fieldset>
				</form>
			</div>
		</main>
		`
})
export class RecipientBadgeCollectionCreateComponent extends BaseAuthenticatedRoutableComponent implements OnInit {
	class functions
}

interface CreateBadgeCollectionForm<T> {
	collectionName: T;
	collectionDescription: T;
}