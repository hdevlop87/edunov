import '@/styles/globals.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NextAuthProviders from '@/Components/NextAuthProviders'
import { NextIntlClientProvider } from 'next-intl';
import {notFound} from 'next/navigation';

export default async function LocaleLayout({ children, params: { locale } }) {

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }


  return (
    <html lang="en">
      <body className='h-screen w-screen font-roboto-slab'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextAuthProviders>
            {children}
          </NextAuthProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
