import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { RecoilRoot } from "recoil"
import { useAuthEffect } from "../hooks/auth"

const Layout = ({ children }) => {
  useAuthEffect()
  return (
    <main className="app">
      {children}
    </main>
  )
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app!</title>
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default App;
