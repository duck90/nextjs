import { Suspense } from 'react';
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from '../configs/AppConfig';
import {
  Layout,
  Grid,
} from "antd";

import Loading from '../components/shared-components/Loading';
import HeaderNav from '../components/layout-components/HeaderNav';
import SideNav from '../components/layout-components/SideNav';
import Footer from '../components/layout-components/Footer';

import '../styles/globals.css';
import '../public/css/light-theme.css';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App({ Component, pageProps }: AppProps) {
  const { Content } = Layout;

  return (
    <div className="App">
      <RecoilRoot>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
          <Layout>
            <HeaderNav />
            <Layout className="app-container">
              <SideNav />
              <Layout className="app-layout">
                <Content>
                <Suspense fallback={<Loading cover="content"/>}>
                  <Component {...pageProps} />
                </Suspense>
                </Content>
                <Footer />
              </Layout>
            </Layout>
          </Layout>
        </ThemeSwitcherProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;