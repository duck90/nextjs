import React from 'react'
import { useRecoilState } from 'recoil';
import Image from 'next/image'
import { SIDE_NAV_WIDTH, SIDE_NAV_COLLAPSED_WIDTH, NAV_TYPE_TOP } from '../../constants/ThemeConstant';
import { APP_NAME } from '../../configs/AppConfig';
import utils from '../../utils';
import { Grid } from 'antd';

import { navStore } from '../../stores/NavStore';
import logo from '../../assets/images/logo.png';
import logo_sm from '../../assets/images/logo-sm.png';





export const Logo = (props) => {
  const [navState] = useRecoilState(navStore);

  const getLogoWidthGutter = () => {
    if(navState.isNavCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`
    } else {
      return `${SIDE_NAV_WIDTH}px`
    }
  }

  const getLogo = () => {
    return navState.isNavCollapsed ? logo_sm : logo;
  }

  return (
    <div
      className='logo'
      style={{width: `${getLogoWidthGutter(props)}`}}>
      <Image src={getLogo()} />
    </div>
  )
}

export default Logo;
