const czvinylConfig = {
	commitTypes: [
		{
			description: '新功能',
			emoji: '🔥',
			value: 'feat',
		},
		{
			description: 'bug修理',
			emoji: '🐞',
			value: 'fix',
		},
		{
			description: '提高代码性能',
			emoji: '⚡',
			value: 'perf',
		},
		{
			description: '添加测试',
			emoji: '✅',
			value: 'test',
		},
		{
			description: '仅文档更改',
			emoji: '📘',
			value: 'docs',
		},
		{
			description: '风格、标记调整',
			emoji: '🎨',
			value: 'style',
		},
		{
			description: '破坏性更改',
			emoji: '💥',
			value: 'breaking',
		},
		// {
		// 	description: 'Build process or auxiliary tool changes',
		// 	emoji: '🤖',
		// 	value: 'chore',
		// },
		// {
		// 	description: 'Create a release commit',
		// 	emoji: '🔖',
		// 	value: 'release',
		// },
		// {
		// 	description: 'A code change that neither fixes a bug or adds a feature',
		// 	emoji: '💡',
		// 	value: 'refactor',
		// },
		// {
		// 	description: 'CI related changes',
		// 	emoji: '🚀',
		// 	value: 'ci',
		// },
	],
	headerFormat: '{type}: {emoji} {subject}',
	skipTicketId: true,
};

module.exports = czvinylConfig;
