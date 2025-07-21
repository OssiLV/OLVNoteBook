// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'OssiLV',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				// Simplified Chinese docs in `src/content/docs/vi/`
				'vi': {
					label: 'Việt Nam',
					lang: 'vi',
				}
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/OssiLV' },
				{ icon: 'external', label: 'Portfolio', href: 'https://ossilv.github.io' },
			],
			sidebar: [
				{
					label: 'Introduction',
					translations: {
						'vi': 'Giới thiệu'
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction',
							translations: {
								'vi': 'Giới thiệu'
							},
							slug: 'introduction/introduction'
						},
					],
				},

				// {
				// 	label: 'Network',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Network', slug: 'network/example' },
				// 	],
				// },
				// {
				// 	label: 'Linux',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Introducing File System in Linux', slug: 'linux/file_system' },
				// 	],
				// },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
