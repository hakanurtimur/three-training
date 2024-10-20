import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 p-0 dark">
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            backgroundImage: "url('/bg.jpg')",
          }}
          className={"w-full h-full"}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
