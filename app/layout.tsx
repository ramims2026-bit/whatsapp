import type { Metadata, Viewport } from 'next'
// החלפנו ל-Heebo או Assistant - פונטים שנראים מעולה בעברית
import { Heebo, Assistant } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// הגדרת פונטים עם תמיכה בעברית
const heebo = Heebo({ 
  subsets: ["hebrew", "latin"],
  variable: '--font-heebo',
});

export const viewport: Viewport = {
  themeColor: '#111b21',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  // תרגום כותרת ותיאור המערכת
  title: 'Ai-ח.סבן | לוגיסטיקה חכמה',
  description: 'עוזר לוגיסטי מבוסס בינה מלאכותית עבור ח. סבן - ניהול צי, שילוח ומעקב משלוחים',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 1. שינוי השפה ל-he
    // 2. הוספת dir="rtl" - זה הקסם שיהפוך את כל הממשק
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={`${heebo.className} font-sans antialiased overflow-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
