import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Layout } from 'antd';
import { SIDE_NAV_WIDTH, NAV_TYPE_SIDE } from '../../constants/ThemeConstant';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuContent from './MenuContent'

import { navStore } from '../../stores/NavStore';
import ignore from "../../constants/ignore_nav.json";

const { Sider } = Layout;

export const SideNav = () => {
  const router = useRouter();
  const [navState] = useRecoilState(navStore);

  if (ignore.indexOf(router.pathname) !== -1) {
    return null;
  }

  return (
    <Sider 
      className="side-nav"
      width={SIDE_NAV_WIDTH} 
      collapsed={navState.isNavCollapsed}
    >
      <Scrollbars autoHide>
        <MenuContent 
          type={NAV_TYPE_SIDE} 
        />
      </Scrollbars>
    </Sider>
  )
}

export default SideNav;
