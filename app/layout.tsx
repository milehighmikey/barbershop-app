export const metadata = {
  title: "SharpFade Barbershop",
  description: "Booking, services, and gallery."
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}