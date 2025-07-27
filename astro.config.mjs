// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	integrations: [
		starlight({
			title: 'OssiLV',
			tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 4},
			locales: {
				root: {
					label: 'Việt Nam',
					lang: 'vi',
				},
				'en': {
					label: 'English',
					lang: 'en',
				}
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/OssiLV' },
				{ icon: 'external', label: 'Portfolio', href: 'https://ossilv.github.io' },
			],
			sidebar: [
				{
					label: 'Giới thiệu',
					translations: {
						'en': 'Introduction'
					},
					items: [
						{
							label: 'Giới thiệu',
							translations: {
								'en': 'Introduction'
							},
							slug: 'introduction/introduction'
						},
					],
				},
				{
					label: 'Mạng',
					translations: {
						'en': 'Networking'
					},
					items: [
						// {
						// 	label: 'Lộ trình Mạng',
						// 	translations: {
						// 		'en': 'Roadmap Networking'
						// 	},
						// 	slug: 'networking/roadmap'
						// },
						{
							label: 'Mô hình OSI & TCP/IP',
							translations: {
								'en': 'OSI & TCP/IP Models'
							},
							slug: 'networking/osi_model_tcp_ip'
						},
						{
							label: 'Địa chỉ IPv4',
							translations: {
								'en': 'IPv4 Addressing'
							},
							slug: 'networking/ipv4_addressing'
						},
						{
							label: 'IPv4 Header',
							translations: {
								'en': 'IPv4 Header'
							},
							slug: 'networking/ipv4_header'
						},
						{
							label: 'DNS (Domain Name System)',
							translations: {
								'en': 'DNS (Domain Name System)'
							},
							slug: 'networking/dns'
						}
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
