import { formatDateRange } from "./utils";

export default {
	name: "Rahman Nurudin",
	about: `
    Someone who loves turning code into smooth, interactive experiences. I build websites and dynamic mobile apps using React, Next.js, Typescript, and React Native. 
    I’m all about clean code, pixel-perfect designs, and solving tricky bugs (sometimes even on purpose—just for fun). Always curious, always learning, and always up for the next challenge.
    When I’m not coding, you’ll find me chasing down new tech trends, tinkering with side projects, or pretending that debugging is my cardio.  
  `,
	location: "Jakarta, Indonesia",
	profession: "Frontend Developer",
	contactEmail: "contact@rahmannurudin29@gmail.com",
	meta: {
		title: "Rahman Nurudin",
		description:
			"Frontend Developer | React, Next.js, React Native, Typescript",
		favicon: "https://avatars.githubusercontent.com/u/93178373?size=64",
	},
	social: {
		github: "TraFost",
		discord: "rahmannrdn",
		instagram: "rahmannrdn",
	},
	projects: [
		{
			title: "Honcho Dashboard",
			description: `Honcho Dashboard is a web application that allows users to manage their account, albums, and view their photos. It also allows users to share their albums with others.`,
			thumbnail: "/src/assets/project-showcase/showcase-6.webp",
			tags: [
				"Typescript",
				"Material-UI",
				"Next.js",
				"React Query",
				"Rx.js",
				"Firebase",
				"Jotai",
				"Websockets",
				"AWS",
				"Docker",
			],
			url: "https://dashboard.thehoncho.app/login",
			isPrivate: true,
		},
		{
			title: "Honcho Public",
			description: `Honcho public is a real-time event photo platform that lets users view and download photos from events. It features a live slideshow, live album, real-time photo uploads, and analytics.`,
			thumbnail: "/src/assets/project-showcase/showcase-5.webp",
			tags: [
				"Typescript",
				"Material-UI",
				"Next.js",
				"React Query",
				"Rx.js",
				"Firebase",
				"Jotai",
				"Websockets",
				"AWS",
				"Docker",
			],
			url: "https://public.thehoncho.app/album/671dfade6f172a4857be19e6?type=all",
			isPrivate: true,
		},
		{
			title: "Admin Panel Caffeine",
			description:
				"An admin panel for managing the Caffeine mobile application. Features include user management, content management, product management, and analytics.",
			thumbnail: "/src/assets/project-showcase/showcase-1.webp",
			tags: [
				"Typescript",
				"TailwindCSS",
				"Firebase",
				"Next.js",
				"Redux",
				"Socket.io",
			],
			isPrivate: true,
		},
		{
			title: "KTA Buya Pasaman Timur",
			description:
				"A digital membership card mobile application for the East Pasaman Buya Members. Features include event registration, digital card, and member profile management.",
			thumbnail: "/src/assets/project-showcase/showcase-4.webp",
			tags: ["React Native", "Typescript", "Zustand"],
			url: "https://play.google.com/store/apps/details?id=com.bpt_app&hl=en_US&pli=1",
			isPrivate: false,
		},
		{
			title: "SickGPT",
			description:
				"A health assistant web application utilizing ChatGPT API to provide answers to health-related questions. Users can choose from different assistant personas for customized responses.",
			thumbnail: "/src/assets/project-showcase/showcase-3.webp",
			tags: ["React.js", "Typescript", "TailwindCSS", "Zustand", "OpenAI API"],
			url: "https://sickgpt.io/",
			isPrivate: false,
		},
		{
			title: "Urban Threads",
			description:
				"Urban-Threads is a Web application that displays products and allows users to add items to their cart and complete a purchase. Users can also add their own products via a dashboard.",
			thumbnail: "/src/assets/project-showcase/showcase-6.webp",
			tags: ["Javascript", "TailwindCSS", "React.js", "Redux", "Pocketbase"],
			url: "https://urban-threads.vercel.app/",
			repository: "https://github.com/TraFost/UrbanThreads",
			isPrivate: false,
		},
		{
			title: "Admin Panel My-Buckit",
			description:
				"A Content Management System for My-Bucket web application. Manages all the content on the website, including user data, user-generated content, and blog posts.",
			thumbnail: "/src/assets/project-showcase/showcase-2.webp",
			tags: ["Typescript", "TailwindCSS", "React.js", "Zustand"],

			isPrivate: true,
		},
		{
			title: "Implant Hospital Mobile",
			description:
				"A mobile application for a Korean organization, allowing users to book doctor appointments.",
			thumbnail: "/src/assets/project-showcase/showcase-5.webp",
			tags: ["React.js", "Typescript", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Hospital Website",
			description:
				"A web application for a Korean hospital, managing patients, doctors, and appointments.",
			thumbnail: "/src/assets/project-showcase/showcase-1.webp",
			tags: ["Next.js", "Typescript", "TailwindCSS", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Patient Website",
			description:
				"A web application for managing patients in the Implant Hospital.",
			thumbnail: "/src/assets/project-showcase/showcase-2.webp",
			tags: ["JavaScript", "TailwindCSS", "React.js", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Patient Mobile",
			description:
				"A mobile application for a Korean organization, allowing patients to book doctor appointments.",
			thumbnail: "/src/assets/project-showcase/showcase-3.webp",
			tags: ["React.js", "Typescript", "Redux"],
			isPrivate: true,
		},
		{
			title: "Personal Blog",
			description:
				"My personal blog where I write about my experiences and share my knowledge.",
			thumbnail: "/src/assets/project-showcase/showcase-6.webp",
			tags: ["Next.js", "Typescript", "TailwindCSS"],
			isPrivate: false,
			url: "https://yapping-archive.vercel.app/",
		},
	],

	// Tech icons are fetched from https://github.com/devicons/devicon
	technologies: [
		{ name: "Typescript", slug: "typescript" },
		{ name: "Javascript", slug: "javascript" },
		{ name: "React", slug: "react" },
		{ name: "React Native", slug: "react" },
		{ name: "Next.js", slug: "nextjs" },
		{ name: "Vue.js", slug: "vuejs" },
		{ name: "Rx.js", slug: "rxjs" },
		{ name: "Svelte", slug: "svelte" },
		{ name: "Docker", slug: "docker" },
		{ name: "Vitest", slug: "vitest" },
		{ name: "Tailwind", slug: "tailwindcss" },
		{ name: "Redux", slug: "redux" },
		{ name: "Firebase", slug: "firebase" },
		{ name: "Socket.io", slug: "socketio" },
		{ name: "Material-UI", slug: "materialui" },
	],
	experiences: [
		{
			title: "Frontend Web Developer",
			company: "Ubersnap Pte. Ltd.",
			year: "2024(November) - Present",
			description: "Building web applications using Next.js",
			duration: formatDateRange("2024-11-01", "Present"),
			responsibilities: [
				"Maintained and improved existing web applications",
				"Developed new features for web applications",
				"Ensured websites look good and work well on all devices and browsers",
				"Worked closely with designers and backend developers to ensure the best user experience",
				"Managed projects effectively even when requirements changed",
				"Participated in code reviews and provided feedback to other developers",
				"Fixed bugs and issues in a timely manner",
				"Worked on multiple projects simultaneously and met deadlines",
			],
		},
		{
			title: "Frontend Developer (Web & Mobile)",
			company: "PT. Healstation Indonesia",
			year: "2023(April) - 2024(October)",
			description:
				"Building web & mobile applications using React & React Native",
			duration: formatDateRange("2023-04-01", "2024-10-01"),
			responsibilities: [
				"Developed websites & apps for korean clients",
				"Turned design mockups into functional web pages and applications",
				"Ensured the best performance and user experience for web and mobile applications",
				"Managed projects effectively even when requirements changed",
				"Handled multiple projects simultaneously and met deadlines",
				"Worked closely with designers and backend developers to ensure the best user experience",
				"Choosed the best technology stack & libraries for each project based on requirements",
			],
		},
		{
			title: "Frontend Web Developer (Freelance)",
			company: "Freelance",
			year: "2023(January) - 2023(March)",
			description: "Building web application using React",
			duration: formatDateRange("2023-01-01", "2023-03-01"),
			responsibilities: [
				"Developed website for my instructor in Harisenin",
				"Turned design mockups into functional web pages",
				"Ensured websites look good and work well on all devices",
				"Took part in reviewing the codebase of the project",
				"Learned how to work with a team",
				"Learned how to participate in a project from scratch",
				"Learned how to manage my time effectively",
				"Learned how to communicate with the team",
				"Learned how to work with libraries and frameworks",
				"Learned how to work with APIs",
			],
		},
	],
	educations: [
		{
			title: "Undergraduate Degree (Last Semester)",
			school: "Universitas Muhammadiyah Tangerang",
			year: "2021 - Present",
		},
		{
			title: "English First (EF)",
			school: "EF",
			year: "2024 - Present",
		},
		{
			title: "Fullstack Bootcamp Developer",
			school: "Harisenin",
			year: "2022 - 2023",
		},
	],
};
