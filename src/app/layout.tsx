import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Noto_Sans_JP, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { convertMetadata } from "@/lib/metadata";
import { toolmetas } from "@/text/meta";

const notoSans = Noto_Sans_JP({
	subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
	subsets: ["latin"],
});

export const metadata = Object.assign({}, convertMetadata(toolmetas[""]), {
	title: "Taruto's-Home page",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning className="hidden-scrollbar">
			<body className={`${notoSans.className} $antialiased `}>
				<Analytics />
				<SpeedInsights />

				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="min-h-screen flex flex-col">
						<Nav />

						<div className="flex justify-center items-center w-screen py-16">
							{children}
						</div>
						<footer className="mt-auto">
							<div className="flex justify-center items-center py-4">
								<p className={`${sourceCodePro.className}  text-sm`}>
									(C) 2025 Taruto
								</p>
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
