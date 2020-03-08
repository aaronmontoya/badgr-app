import statements

@Component({
	selector: 'change-password',
	template: `
		<main>
            <form-message></form-message>
            <header class="wrap wrap-light l-containerhorizontal l-heading">
				<nav>
					<h1 class="visuallyhidden">Breadcrumbs</h1>
					<ul class="breadcrumb">
						<li>
							<a [routerLink]="['/profile/profile']">Profile</a>
						</li>
						<li class="breadcrumb-x-current">Change Password</li>
					</ul>
				</nav>
				<div class="heading">
					<div class="heading-x-text">
						<h1>Enter a new password</h1>
						<p>Enter in your new password.</p>
					</div>
				</div>
			</header>
            <div class="l-containerhorizontal l-containervertical l-childrenvertical wrap">
				<form class="l-form" [formGroup]='changePasswordForm' (ngSubmit)="submitChange()" novalidate>
					<fieldset>
						<bg-formfield-text [control]="changePasswordForm.controls.current_password"
						                   [label]="'Current Password'"
						                   [errorMessage]="'Please enter current password'"
						                   fieldType="password"
						                   [autofocus]="true">              
                        </bg-formfield-text>
                            <bg-formfield-text [control]="changePasswordForm.controls.password1"
                                               [label]="'New Password'"
                                               [errorMessage]="'Please enter a new password'"
                                               fieldType="password"
                                               >
							    <span label-additions>(MUST BE AT LEAST 8 CHARACTERS)</span>
                            </bg-formfield-text>
                            <bg-formfield-text [control]="changePasswordForm.controls.password2"
                                               [label]="'Confirm New Password'"
                                               fieldType="password"
                                               [errorMessage]="{ required: 'Please confim your new password' }"
                                               >
                            </bg-formfield-text>
					</fieldset>
					<p>
						Don't have your current password? <a (click)="forgotPassword()">Click here to reset by email</a>
					</p>
                    <div class="l-form-x-offset l-childrenhorizontal l-childrenhorizontal-right">
                    <div class="l-flex l-flex-1x l-flex-justifyend u-margin-top2x">
						<a class="button button-secondary"
						   (click)="cancel()"
						   [disabled-when-requesting]="true"
						   tabindex="0"
                        >Cancel</a>
						<button class="button"
						    type="submit"
						    (click)="clickSubmit($event)"
						    [loading-when-requesting]="true"
						    loading-message="Changing Password"
                        >Change Password</button>                    
					</div>
                    <p class="u-text u-margin-yaxis3x">
				</form>
			</div>
		</main>
	`
})
export class ChangePasswordComponent extends BaseRoutableComponent {
	Class functions
}