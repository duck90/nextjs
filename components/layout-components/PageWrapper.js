import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from '../../constants/ThemeConstant';

import { navStore } from '../../stores/NavStore';

import PageHeader from 'components/layout-components/PageHeader';
import ignore from "../../constants/ignore_nav.json";

export const PageWrapper = ({ children, title }) => {
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
    <div className="app-content" style={{ paddingLeft: getNavWidth() }}>
      <div style={{ padding: '25px' }}>
        { title && <PageHeader title={title} /> }
        {children}
      </div>
    </div>
  )
}

export default PageWrapper;