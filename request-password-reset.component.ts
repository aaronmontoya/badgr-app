import statements

@Component({
	selector: 'password-reset-request',
	template: `
		<main>
			<form-message></form-message>
            <header class="l-containerxaxis topbar">
				<!-- OAuth Banner -->
				<oauth-banner></oauth-banner>
				<!-- Title Message -->
				<h3 class="topbar-x-heading" id="heading-form">Forgot your password?</h3>
                <p class="topbar-x-subheading">Fill in your email, and we'll help you reset your password</p>
            </header>
			<div class="l-containerxaxis u-margin-top3x u-width-formsmall">
				<!-- Login Form -->
                <form role="form"
				      aria-labelledby="heading-form"
				      [formGroup]="requestPasswordResetForm"
				      (ngSubmit)="submitResetRequest()"
				      novalidate
				>
					<fieldset role="group" aria-labelledby="heading-forgotpassword">
						<legend class="visuallyhidden" id="heading-forgotpassword">Forgot Password</legend>
						<bg-formfield-text [control]="requestPasswordResetForm.controls.username"
						                   [label]="'Email'"
						                   [errorMessage]="'Please enter a valid email address'"
						                   [autofocus]="true"
						                   [initialValue]="prefilledEmail || ''"
						></bg-formfield-text>
					</fieldset>
                    <div class="l-flex l-flex-1x l-flex-justifyend u-margin-top2x">
						<a class="button button-secondary"
						   [routerLink]="['/auth/login']"
						   [disabled-when-requesting]="true"
						>Cancel</a>

						<button class="button"
						        type="submit"
						        (click)="clickSubmit($event)"
						        [loading-when-requesting]="true"
						        loading-message="Resetting Password"
						>Reset Password
						</button>
					</div>
				</form>
			</div>
		</main>
	`
})
export class RequestPasswordResetComponent extends BaseRoutableComponent {
	class functions
}