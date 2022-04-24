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

export const HeaderNav = ({ children }) => {
  const [navState] = useRecoilState(navStore);
  const router = useRouter();

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
    <div style={{ paddingLeft: getNavWidth() }}>
      {children}
    </div>
  )
}

export default HeaderNav;