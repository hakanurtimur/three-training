import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 dark">
        <div className={"w-full h-full bg-black"}>{children}</div>
      </body>
    </html>
  );
}
