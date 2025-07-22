// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(
		{
			webAnalytics: {
				enabled: true,
			},
		}
	),
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
						{
							label: 'Introduction',
							translations: {
								'vi': 'Giới thiệu'
							},
							slug: 'introduction/introduction'
						},
					],
				},
				{
					label: 'Networking',
					translations: {
						'vi': 'Mạng'
					},
					items: [
						{
							label: 'Basic',
							translations: {
								'vi': 'Cơ bản'
							},
							items: [
								{
									label: 'OSI & TCP/IP Models',
									translations: {
										'vi': 'Mô hình OSI & TCP/IP'
									},
									slug: 'networking/osi_model_tcp_ip'
								}
							]
						},
					],
				},
			],
			customCss: [
				'./src/styles/font.css',
				// Fontsource files for to regular and semi-bold font weights.
				'@fontsource/ibm-plex-sans/400.css',
				'@fontsource/ibm-plex-sans/600.css',
			],
		}),
	],
});
