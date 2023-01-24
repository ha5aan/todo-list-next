import './globals.css'
import styles from "./layout.module.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <head />
      <body className={styles.main}>
        <h1 className={styles.heading}>Welcome to server side rendered todo app</h1>
    {children}
    
      </body>
    </html>
  )
}
