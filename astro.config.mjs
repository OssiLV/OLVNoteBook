// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
    adapter: vercel(),
    integrations: [
        mermaid({
            theme: "neutral",
            autoTheme: true,
        }),
        starlight({
            title: "OssiLV",
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
            locales: {
                root: {
                    label: "Việt Nam",
                    lang: "vi",
                },
                en: {
                    label: "English",
                    lang: "en",
                },
            },
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/OssiLV",
                },
                {
                    icon: "external",
                    label: "Portfolio",
                    href: "https://ossilv.github.io",
                },
            ],
            sidebar: [
                {
                    label: "Giới thiệu",
                    translations: {
                        en: "Introduction",
                    },
                    items: [
                        {
                            label: "Giới thiệu",
                            translations: {
                                en: "Introduction",
                            },
                            slug: "introduction/introduction",
                        },
                    ],
                },
                {
                    label: "Networking",
                    items: [
                        // {
                        // 	label: 'Lộ trình Mạng',
                        // 	translations: {
                        // 		'en': 'Roadmap Networking'
                        // 	},
                        // 	slug: 'networking/roadmap'
                        // },
                        {
                            label: "Mô hình OSI & TCP/IP",
                            translations: {
                                en: "OSI & TCP/IP Models",
                            },
                            slug: "networking/osi_model_tcp_ip",
                        },
                        {
                            label: "Địa chỉ IPv4",
                            translations: {
                                en: "IPv4 Addressing",
                            },
                            slug: "networking/ipv4_addressing",
                        },
                        {
                            label: "IPv4 Header",
                            translations: {
                                en: "IPv4 Header",
                            },
                            slug: "networking/ipv4_header",
                        },
                        {
                            label: "DNS (Domain Name System)",
                            translations: {
                                en: "DNS (Domain Name System)",
                            },
                            slug: "networking/dns",
                        },
                        {
                            label: "HTTP",
                            translations: {
                                en: "HTTP",
                            },
                            slug: "networking/http",
                        },
                        {
                            label: "SSL/TLS",
                            translations: {
                                en: "SSL/TLS",
                            },
                            slug: "networking/ssl_tls",
                        },
                    ],
                },
                {
                    label: "Linux",
                    items: [
                        {
                            label: "CLI cheat sheet",
                            translations: {
                                en: "CLI cheat sheet",
                            },
                            slug: "linux/cli_cheat_sheet",
                        },
                    ],
                },
                {
                    label: "Git & GitHub",
                    items: [],
                },
                {
                    label: "CI/CD",
                    items: [],
                },
                {
                    label: "Tools",
                    items: [
                        {
                            label: "Docker",
                            items: [
                                {
                                    label: "Giới thiệu Docker",
                                    translations: {
                                        en: "Introduction to Docker",
                                    },
                                    slug: "tools/docker/introduction",
                                },
                                {
                                    label: "Dockerfile là gì?",
                                    translations: {
                                        en: "What is a Dockerfile?",
                                    },
                                    slug: "tools/docker/what_is_a_dockerfile",
                                },
                                {
                                    label: "Docker Compose là gì?",
                                    translations: {
                                        en: "What is Docker Compose?",
                                    },
                                    slug: "tools/docker/what_is_a_docker_compose",
                                },
                            ],
                        },
                        {
                            label: "Jenkins",
                            items: [
                                {
                                    label: "Jenkinsfile là gì?",
                                    translations: {
                                        en: "What is a Jenkinsfile?",
                                    },
                                    slug: "tools/jenkins/what_is_a_jenkinsfile",
                                },
                            ],
                        },
                        {
                            label: "Nginx",
                            items: [
                                {
                                    label: "Giới thiệu Nginx",
                                    translations: {
                                        en: "Introduction to Nginx",
                                    },
                                    slug: "tools/nginx/introduction",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Cloud - AWS",
                    items: [
                        {
                            label: "Các dịch vụ AWS thường dùng",
                            translations: {
                                en: "Commonly used AWS services",
                            },
                            slug: "aws/list_services",
                        },
                    ],
                },
                {
                    label: "Monitoring & Logging",
                    items: [],
                },
                {
                    label: "DevSecOps",
                    items: [],
                },
            ],
            customCss: [
                "./src/styles/theme.css",
                "./src/styles/font.css",
                // Fontsource files for to regular and semi-bold font weights.
                "@fontsource/ibm-plex-sans/400.css",
                "@fontsource/ibm-plex-sans/600.css",
            ],
        }),
    ],
});
