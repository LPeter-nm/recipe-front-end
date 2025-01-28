import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>

      <body
        className={`antialiased`}
        > 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
