import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="sm:p-8 flex justify-center items-center h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
