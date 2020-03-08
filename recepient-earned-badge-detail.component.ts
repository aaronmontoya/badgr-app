import statements

@Component({
	selector: 'recipient-earned-badge-detail',
	templateUrl: './recipient-earned-badge-detail.component.html'
})
export class RecipientEarnedBadgeDetailComponent extends BaseAuthenticatedRoutableComponent implements OnInit {
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