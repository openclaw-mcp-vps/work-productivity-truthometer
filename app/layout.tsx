import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Work Productivity Truthometer — Honest Time Tracking for Developers",
  description:
    "Anonymous tool for developers to honestly track actual work hours vs reported hours, with aggregate industry insights."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="2cfaaa20-3797-4cf2-ab3d-a8bb31d560a0"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
