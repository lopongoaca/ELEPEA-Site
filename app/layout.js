import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LPA [Development - Design - Advertisement]</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
