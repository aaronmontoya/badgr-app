import statements

@Component({
	selector: 'create-recipient-badge-collection',
	template: `
		<main>
			<form-message></form-message>
			<header class="wrap wrap-light l-containerhorizontal l-heading">
				<nav>
					<h1 class="visuallyhidden">Breadcrumbs</h1>
					<ul class="breadcrumb">
						<li><a [routerLink]="['/issuer']">Collections</a></li>
					</ul>
				</nav>
				<div class="heading">
					<div class="heading-x-text">
						<h1>Add Badge Collection</h1>
						<p>Adding a collection allows your to organize your badges.</p>
					</div>
                </div>
			</header>
		
			<div class="l-containerhorizontal l-containervertical l-childrenvertical wrap">
				<form class="l-form l-form-image"
                      [formGroup]="badgeCollectionForm"
				      (ngSubmit)="onSubmit(badgeCollectionForm.value)"
				      novalidate>
					<fieldset>
                         <bg-formfield-text [control]="badgeCollectionForm.controls.collectionName"
						                   [label]="'Name'"
						                   [errorMessage]="{required:'Please enter a collection name'}"
                                           [autofocus]="true">
                                           [sublabel]="'Max 128 characters'">
                            <span label-additions>Max 128 characters</span>
	                    </bg-formfield-text>
                        <bg-formfield-text [control]="badgeCollectionForm.controls.collectionDescription"
						                   [label]="'Description'"
					                       [errorMessage]="{required: 'Please enter a description'}"
                                           [multiline]="true">
                                           [sublabel]="'Max 255 characters'">
                            <span label-additions>Max 255 characters</span>
                        </bg-formfield-text>
                        <div class="l-form-x-offset l-childrenhorizontal l-childrenhorizontal-small l-childrenhorizontal-right">
                            <a [routerLink]="['/recipient/badge-collections']"
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