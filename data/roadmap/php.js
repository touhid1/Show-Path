const php = [
	{
		name: 'PHP',
		children: [
			{
				name: 'Testing',
				children: [
					{
						name: 'PHPUnit',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'PHPSpec' },
					{ name: 'Codeception' }
				]
			},
			{
				name: 'Frameworks',
				children: [
					{
						name: 'Laravel',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					},
					{ name: 'Symfony' },
					{ name: 'CodeIgniter' },
					{ name: 'Slim' },
					{ name: 'Lumen' }
				]
			},
			{
				name: 'Package Manager',
				children: [
					{
						name: 'Composer',
						legends: {
							type: 'good',
							message: 'Good to Know'
						}
					}
				]
			},
			{
				name: 'Debugger / Profiler',
				children: [{ name: 'xDebug' }, { name: 'XHProf' }, { name: 'New Relic' }, { name: 'Black fire' }]
			}
		]
	}
];
export default php;
