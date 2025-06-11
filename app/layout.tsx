import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Geist, Geist_Mono, Roboto, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import '@fontsource-variable/plus-jakarta-sans';
import MainLayout from "./components/MainLayout";
import 'react-datepicker/dist/react-datepicker.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const roboto = Roboto ({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700"],
// })

// const plus = Plus_Jakarta_Sans ({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "700"],
// })

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Colearn",
    template: "Colearn - %s", 
  },
  description: "A modern e-learning platform for students and professionals to learn new skills and earn certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon-logo.png" type="image/png" />
      </head>
      <body>
        <MainLayout>
          {children}
          <ToastContainer />
        </MainLayout>
      </body>
    </html>
  );
}
