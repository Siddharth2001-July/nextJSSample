import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
declare global {
  interface Window { PSPDFKit: any; }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <script src="https://cdn.cloud.pspdfkit.com/pspdfkit-web@2024.4.0/pspdfkit.js"></script>
      </body>
    </html>
  );
}
