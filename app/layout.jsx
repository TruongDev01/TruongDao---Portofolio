import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "TruongDao | Portofolio",

    description:
		"My name is TruongDao, I'm a web developer and I'm passionate about it. I'm currently studying at Ha Noi University of Science and Technology.",

    author: "TruongDao",
    siteUrl: "",
    applicationName: "TruongDao",

    keywords: [
		"truongdao",
		"truongda",
		"truong",
		"dao"
	],

    openGraph: {
		type: "website",
		url: "",
		title: "TruongDao | Portofolio",
		site_name: "TruongDao | Portofolio",
		description: "My name is TruongDao, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "TruongDao Portofolio",
			},
		],
		site_name: "TruongDao | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
