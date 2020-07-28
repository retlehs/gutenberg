export default [
	{
		attributes: {
			align: {
				type: 'string',
				enum: [ 'left', 'center', 'right', 'wide', 'full' ],
			},
			className: {
				type: 'string',
			},
			displayAsDropdown: {
				type: 'boolean',
				default: false,
			},
			showPostCounts: {
				type: 'boolean',
				default: false,
			},
		},
	},
];
