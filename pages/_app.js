import '@/styles/globals.css'

import Layout from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  )
}
