import statements
import { QueryParametersService } from "../../../common/services/query-parameters.service";

@Component({
	selector: 'recipient-earned-badge-detail',
	templateUrl: './recipient-earned-badge-detail.component.html'
})
export class RecipientEarnedBadgeDetailComponent extends BaseAuthenticatedRoutableComponent implements OnInit {
	class functions
    
    private get rawJsonUrl() {
		return `${this.configService.apiConfig.baseUrl}/public/assertions/${this.assertionId}.json`;
	}

	get v1JsonUrl() {
		return addQueryParamsToUrl(this.rawJsonUrl, {v: "1_1"});
	}

	get v2JsonUrl() {
		return addQueryParamsToUrl(this.rawJsonUrl, {v: "2_0"});
	}

	get rawBakedUrl() {
		return `${this.configService.apiConfig.baseUrl}/public/assertions/${this.assertionId}/baked`;
	}

	get v1BakedUrl() {
		return addQueryParamsToUrl(this.rawBakedUrl, {v: "1_1"})
	}

	get v2BakedUrl() {
		return addQueryParamsToUrl(this.rawBakedUrl, {v: "2_0"})
	}

	get verifyUrl() {
		const v = this.queryParametersService.queryStringValue("v") || "2_0";
		const ASSERTION_URL = v === "2_0" ? this.v2JsonUrl : this.v1JsonUrl;
		let url = `${this.configService.assertionVerifyUrl}?url=${ASSERTION_URL}`;

		for (let IDENTITY_TYPE of ['identity__email', 'identity__url', 'identity__telephone']) {
			let identity = this.queryParametersService.queryStringValue(IDENTITY_TYPE)
			if (identity) {
				url = `${url}&${IDENTITY_TYPE}=${identity}`;
			}
		}
		return url;
	}

	class functions
}

export function badgeShareDialogOptionsFor(badge: RecipientBadgeInstance): ShareSocialDialogOptions {
	return badgeShareDialogOptions({
		shareUrl: badge.shareUrl,
		imageUrl: badge.imagePreview,
		badgeClassName: badge.badgeClass.name,
		badgeClassDescription: badge.badgeClass.description,
		issueDate: badge.issueDate,
		recipientName: badge.getExtension('extensions:recipientProfile', {'name': undefined}).name,
		recipientIdentifier: badge.recipientEmail
	});
}

interface BadgeShareOptions {
	interface attributes
}

export function badgeShareDialogOptions(options: BadgeShareOptions): ShareSocialDialogOptions {
	return {
		return values
	}
}