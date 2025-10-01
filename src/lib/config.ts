import { formatDateRange } from "./utils";

export default {
	name: "Rahman Nurudin",
	about: `
	I’m a full stack developer who focuses on building products that actually work at scale. My work spans frontend, backend, and cloud, from designing APIs with NestJS and PostgreSQL to creating responsive web and mobile apps with React and Next.js.
	I’ve delivered platforms with real-time chat, scheduling systems, background job queues, and automation that save teams hours every week. What drives me is making things reliable, fast, and easy for people to use.
	Outside of client work, I push myself through side projects and hackathons, experimenting with AI and new technologies to sharpen my skills and keep moving forward.
	`,
	location: "Tangerang, Indonesia",
	profession: "Full Stack Developer",
	contactEmail: "rahwisdilfiqrak@gmail.com",
	meta: {
		title: "Rahman Nurudin | Full Stack Developer",
		description:
			"Full Stack Developer | React, Next.js, NestJS, PostgreSQL, Redis",
		favicon: "https://avatars.githubusercontent.com/u/93178373?size=64",
	},
	social: {
		github: "TraFost",
		discord: "rahmannrdn",
		instagram: "rahmannrdn",
	},
	projects: [
		{
			title: "Ruang Diri",
			description:
				"Counseling platform with secure APIs, real-time chat, scheduling, and automation for mental health services.",
			thumbnail: "https://i.postimg.cc/HxFL10KN/showcase-3.webp",
			tags: [
				"NestJS",
				"TypeScript",
				"PostgreSQL",
				"Drizzle ORM",
				"Redis",
				"BullMQ",
				"Ably",
				"React",
			],
			isPrivate: true,
		},
		{
			title: "BIMTranslator",
			description:
				"Hackathon project with in-browser translation of Malaysian Sign Language gestures to text, using MediaPipe hand landmarks, TensorFlow.js classification, phrase matching, and animation playback.",
			thumbnail: "https://i.postimg.cc/D0sw-vJ3w/showcase-6.webp",
			tags: [
				"React",
				"TypeScript",
				"MediaPipe",
				"TensorFlow.js",
				"TailwindCSS",
				"Framer Motion",
			],
			url: "https://bim-translator-l4md.vercel.app",
			repository: "https://github.com/TraFost/bim-translator",
			isPrivate: false,
		},
		{
			title: "Honcho Dashboard",
			description: `Honcho Dashboard is a web application that allows users to manage their account, albums, and view their photos. It also allows users to share their albums with others.`,
			thumbnail: "https://i.postimg.cc/QMxCQd1f/showcase-4.webp",
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
			thumbnail: "https://i.postimg.cc/d1h0fNWd/showcase-5.webp",
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
			thumbnail: "https://i.postimg.cc/zGk3HgbL/showcase-1.webp",
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
			thumbnail: "https://i.postimg.cc/QMxCQd1f/showcase-4.webp",
			tags: ["React Native", "Typescript", "Zustand"],
			url: "https://play.google.com/store/apps/details?id=com.bpt_app&hl=en_US&pli=1",
			isPrivate: false,
		},
		{
			title: "SickGPT",
			description:
				"A health assistant web application utilizing OpenAI API to provide answers to health-related questions. Users can choose from different assistant personas for customized responses.",
			thumbnail: "https://i.postimg.cc/HxFL10KN/showcase-3.webp",
			tags: ["React.js", "Typescript", "TailwindCSS", "Zustand", "OpenAI API"],
			url: "https://sickgpt.io/",
			isPrivate: false,
		},
		{
			title: "Urban Threads",
			description:
				"Urban-Threads is a Web application that displays products and allows users to add items to their cart and complete a purchase. Users can also add their own products via a dashboard.",
			thumbnail: "https://i.postimg.cc/D0sw-vJ3w/showcase-6.webp",
			tags: ["Javascript", "TailwindCSS", "React.js", "Redux", "Pocketbase"],
			url: "https://urban-threads.vercel.app/",
			repository: "https://github.com/TraFost/UrbanThreads",
			isPrivate: false,
		},
		{
			title: "Admin Panel My-Buckit",
			description:
				"A Content Management System for My-Bucket web application. Manages all the content on the website, including user data, user-generated content, and blog posts.",
			thumbnail: "https://i.postimg.cc/Pq3x2nMT/showcase-2.webp",
			tags: ["Typescript", "TailwindCSS", "React.js", "Zustand"],
			isPrivate: true,
		},
		{
			title: "Implant Hospital Mobile",
			description:
				"A mobile application for a Korean organization, allowing users to book doctor appointments.",
			thumbnail: "https://i.postimg.cc/d1h0fNWd/showcase-5.webp",
			tags: ["React.js", "Typescript", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Hospital Website",
			description:
				"A web application for a Korean hospital, managing patients, doctors, and appointments.",
			thumbnail: "https://i.postimg.cc/zGk3HgbL/showcase-1.webp",
			tags: ["Next.js", "Typescript", "TailwindCSS", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Patient Website",
			description:
				"A web application for managing patients in the Implant Hospital.",
			thumbnail: "https://i.postimg.cc/Pq3x2nMT/showcase-2.webp",
			tags: ["JavaScript", "TailwindCSS", "React.js", "Redux"],
			isPrivate: true,
		},
		{
			title: "Implant Patient Mobile",
			description:
				"A mobile application for a Korean organization, allowing patients to book doctor appointments.",
			thumbnail: "https://i.postimg.cc/HxFL10KN/showcase-3.webp",
			tags: ["React.js", "Typescript", "Redux"],
			isPrivate: true,
		},
		{
			title: "Personal Blog",
			description:
				"My personal blog where I write about my experiences and share my knowledge.",
			thumbnail: "https://i.postimg.cc/D0sw-vJ3w/showcase-6.webp",
			tags: ["Next.js", "Typescript", "TailwindCSS"],
			isPrivate: false,
			url: "https://yapping-archive.vercel.app/",
		},
	],
	technologies: [
		{
			name: "Typescript",
			slug: "typescript",
		},
		{ name: "Javascript", slug: "javascript" },
		{ name: "React", slug: "react" },
		{ name: "React Native", slug: "react" },
		{ name: "Next.js", slug: "nextjs" },
		{ name: "NestJS", slug: "nestjs" },
		{ name: "Node.js", slug: "nodejs" },
		{ name: "Express", slug: "express" },
		{ name: "PostgreSQL", slug: "postgresql" },
		{ name: "Redis", slug: "redis" },
		{ name: "Google Cloud", slug: "googlecloud" },
		{
			name: "AWS",
			slug: "amazonwebservices",
			extendedSlug: "amazonwebservices-original-wordmark",
		},
		{ name: "Docker", slug: "docker" },
		{ name: "Firebase", slug: "firebase" },
		{ name: "Socket.io", slug: "socketio" },
		{ name: "Tailwind", slug: "tailwindcss" },
		{ name: "Redux", slug: "redux" },
		{ name: "Jest", slug: "jest", extendedSlug: "jest-plain" },
		{ name: "Rx.js", slug: "rxjs" },
		{ name: "Material-UI", slug: "materialui" },
	],
	experiences: [
		{
			title: "Fullstack Developer",
			company: "PT. Wong Makmur Sejati",
			year: "April 2025 – October 2025 | South Jakarta, Indonesia",
			description:
				"Scaling a counseling platform with secure APIs and real-time collaboration for mental wellness teams.",
			duration: formatDateRange("2025-04-01", "2025-10-01"),
			responsibilities: [
				"Designed and deployed secure NestJS + PostgreSQL (Drizzle ORM) APIs serving 5,000+ monthly counseling and scheduling requests.",
				"Built Ably-powered chat (presence, file sharing, unread tracking, search) supporting hundreds of active users daily while keeping message latency under 200ms.",
				"Automated Zoom session setup and notifications with Bull + Redis, saving the team 10+ hours of manual coordination every week.",
				"Developed prioritized Bull + Redis job queues with retry logic, processing hundreds of background tasks daily at 99% reliability.",
				"Integrated Google Cloud Storage, Resend email delivery, and Puppeteer PDF generation to automate weekly reports and file operations.",
			],
		},
		{
			title: "Frontend Web Developer",
			company: "Ubersnap Pte. Ltd.",
			year: "October 2024 – April 2025 | Singapore (Remote)",
			description:
				"Shipped high-performing marketing and product experiences for a global photo platform.",
			duration: formatDateRange("2024-10-01", "2025-04-01"),
			responsibilities: [
				"Implemented optimistic updates, polling, and queuing to keep complex dashboards responsive for 1,000+ daily active users.",
				"Boosted Lighthouse scores from the 70s to 90+, driving a 15% lift in organic traffic.",
				"Increased user engagement by 25% through targeted UI improvements and faster load times across web and mobile.",
				"Partnered with design, backend, and QA teams across three time zones to ship features under shifting requirements.",
				"Expanded unit and regression test coverage, cutting post-release bugs by 30% and improving long-term stability.",
			],
		},
		{
			title: "Frontend Developer (Web & Mobile)",
			company: "PT. Healstation Indonesia",
			year: "April 2023 – October 2024 | Jakarta, Indonesia (Hybrid)",
			description:
				"Delivering healthcare, POS, and CMS products across web and mobile for Korean clients.",
			duration: formatDateRange("2023-04-01", "2024-10-01"),
			responsibilities: [
				"Delivered 7+ production apps across healthcare, POS, and CMS domains serving 5,000+ end users.",
				"Built shared React, Next.js, and React Native codebases to accelerate delivery and cut duplicate logic by 40%.",
				"Maintained 95%+ cross-device and browser compatibility to ensure consistent experiences.",
				"Partnered with leadership to align delivery with business goals, reducing bottlenecks across squads.",
				"Implemented Socket.io and Firebase real-time updates that reduced POS order delays by 60% and improved satisfaction.",
			],
		},
	],
	educations: [
		{
			title: "B.Sc. Informatics Engineering (GPA 3.70/4.0)",
			school: "Universitas Muhammadiyah Tangerang",
			year: "2021 - 2025",
		},
		{
			title: "English First (EF)",
			school: "EF",
			year: "2024 - 2025",
		},
		{
			title: "Fullstack Bootcamp Developer",
			school: "Harisenin",
			year: "2022 - 2023",
		},
	],
};
