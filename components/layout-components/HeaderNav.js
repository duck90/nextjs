import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from './Logo';
import NavNotification from './NavNotification';
import NavProfile from './NavProfile';
import { SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from '../../constants/ThemeConstant';

import { navStore } from '../../stores/NavStore';
import utils from '../../utils';

import ignore from "../../constants/ignore_nav.json";

const { Header } = Layout;

export const HeaderNav = props => {
  const { headerNavColor, currentTheme } = props;
  const [navState, setNavCollapsed] = useRecoilState(navStore);
  const router = useRouter();

  const onToggle = () => {
    setNavCollapsed({
      isNavCollapsed: !navState.isNavCollapsed,
    });
  }

  const mode = ()=> {
    if(!headerNavColor) {
      return utils.getColorContrast(currentTheme === 'dark' ? '#00000' : '#ffffff' )
    }
    return utils.getColorContrast(headerNavColor)
  }

  const getNavWidth = () => {
    if(navState.isNavCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`
    } else {
      return `${SIDE_NAV_WIDTH}px`
    }
  }

  if (ignore.indexOf(router.pathname) !== -1) {
    return null;
  }
  
  return (
    <Header className={`app-header ${mode()}`} style={{backgroundColor: headerNavColor}}>
      <div className="app-header-wrapper">
        <Logo logoType={mode()}/>
        <div className="nav" style={{width: `calc(100% - ${getNavWidth()})`}}>
          <div className="nav-left">
            <ul className="ant-menu ant-menu-root ant-menu-horizontal">          
              <li className="ant-menu-item ant-menu-item-only-child" onClick={() => {onToggle()}}>
              {!navState.isNavCollapsed ? <MenuFoldOutlined className="nav-icon" /> : <MenuUnfoldOutlined className="nav-icon" />}
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <NavNotification />
            <NavProfile />
          </div>
        </div>
      </div>
    </Header>
  )
}

export default HeaderNav;