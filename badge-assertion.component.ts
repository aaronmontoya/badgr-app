import statements

@Component({
	templateUrl: './badge-assertion.component.html'
})
export class PublicBadgeAssertionComponent {
    class functions
    
    get recipientId() {
		const i = this.queryParametersService.queryStringValue("i");
		let recipientIdentifierString = i;
		for (let IDENTITY_TYPE of ['identity__email', 'identity__url', 'identity__telephone']) {
			let identity = this.queryParametersService.queryStringValue(IDENTITY_TYPE)
			if (identity) {
				recipientIdentifierString = `${i}&${IDENTITY_TYPE}=${identity}`;
			}
		}
		return recipientIdentifierString;
	}
}