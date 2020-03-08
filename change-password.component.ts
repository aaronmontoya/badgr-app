import statements

@Component({
	selector: 'change-password',
	template: `
		<main>
            <form-message></form-message>
            <header class="l-containerxaxis topbar">
				<h1 class="topbar-x-heading">Change Password</h1>
				<p class="topbar-x-subheading">Enter a new password.</p>
			</header>
			<div class="l-containerxaxis u-margin-top3x u-width-formsmall">
				<form class="l-form" [formGroup]='changePasswordForm' (ngSubmit)="submitChange()" novalidate>
					<fieldset>
						<bg-formfield-text [control]="changePasswordForm.controls.current_password"
						                   [label]="'Current Password'"
						                   [errorMessage]="'Please enter current password'"
						                   fieldType="password"
						                   [autofocus]="true">              
                        </bg-formfield-text>
                        <div class="u-margin-top2x">
                            <bg-formfield-text [control]="changePasswordForm.controls.password1"
                                               [label]="'New Password'"
                                               [errorMessage]="'Please enter a new password'"
                                               fieldType="password"
                                               [sublabel]="'Must be at least 8 characters'"
                                               >
							    <span label-additions>(MUST BE AT LEAST 8 CHARACTERS)</span>
                            </bg-formfield-text>
						</div>
						<div class="u-margin-top2x">
                            <bg-formfield-text [control]="changePasswordForm.controls.password2"
                                               [label]="'Confirm New Password'"
                                               fieldType="password"
                                               [errorMessage]="{ required: 'Please confim your new password' }"
                                               >
                            </bg-formfield-text>
                        </div>
					</fieldset>
                    <div class="l-stack l-stack-buttons u-margin-top2x">
						<button class="button"
						    type="submit"
						    (click)="clickSubmit($event)"
						    [loading-when-requesting]="true"
						    loading-message="Changing Password"
                        >Change Password</button>                    
                        <a class="button button-secondary"
                            (click)="cancel()"
                            [disabled-when-requesting]="true"
                            tabindex="0"
                        >Cancel</a>
					</div>
                    <p class="u-text u-margin-top2x u-margin-bottom3x u-margin-yaxis3x">
						Don’t have your current password?
			            <br>
			            <a (click)="forgotPassword()" class="u-text-link">Click here</a>
			            to reset by email.
					</p>
				</form>
			</div>
		</main>
	`
})
export class ChangePasswordComponent extends BaseRoutableComponent {
	Class attributes
}