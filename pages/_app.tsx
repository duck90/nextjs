import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import MenuAppBar from '../components/MenuAppBar';
import SideMenu from '../components/SideMenu';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MenuAppBar />
      <SideMenu />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;