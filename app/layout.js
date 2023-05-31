import './globals.css'
export const metadata = {
  title: 'ELEPEA_ [Development - Design - Advertisement]',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
