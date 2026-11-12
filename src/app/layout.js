import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Prakhar Maitreya Parashar | Software Engineer Portfolio",
  description:
    "Portfolio of Prakhar Maitreya Parashar — Computer Science undergraduate at LPU, interested in software engineering, backend development (Java/Spring Boot, Python/Django), APIs, and developer tooling.",
  keywords: [
    "Prakhar Maitreya Parashar",
    "Software Engineer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "Portfolio",
    "LPU",
  ],
  openGraph: {
    title: "Prakhar Maitreya Parashar | Software Engineer Portfolio",
    description:
      "Computer Science undergraduate building backend systems with Java, Python, and REST APIs.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-[#0a0f1a]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
