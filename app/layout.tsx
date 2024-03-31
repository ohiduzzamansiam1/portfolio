import InitTexts from "@/components/InitTexts";
import { ThemeProvider } from "@/components/theme-provider";
import { graphqlClient } from "@/lib/graphql/client";
import { TextStore } from "@/lib/store/useTexts";
import { Analytics } from "@vercel/analytics/react";
import { gql } from "graphql-request";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ohiduzzaman Siam | Portfolio",
  description: "Generated by create next app",
};

const getTexts = async () => {
  const query = gql`
    query Texts {
      texts {
        title
        subtitle
        aboutTitle
        aboutDescription
      }
    }
  `;
  let { texts } = await graphqlClient.request<{ texts: TextStore[] }>(query);
  return texts[0];
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { title, subtitle, aboutTitle, aboutDescription } = await getTexts();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <InitTexts
          title={title}
          subtitle={subtitle}
          aboutTitle={aboutTitle}
          aboutDescription={aboutDescription}
        />
        <Analytics />
      </body>
    </html>
  );
}
