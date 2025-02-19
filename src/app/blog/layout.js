import '../../styles/globals1.css';

export const metadata = {
  title: 'Helper Buddy Blog',
  description: 'Your go-to blog for cleaning services in Surat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}