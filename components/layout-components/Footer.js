import React from 'react'
import { useRecoilState } from 'recoil';

import { APP_NAME } from '../../configs/AppConfig';
import { SIDE_NAV_COLLAPSED_WIDTH, SIDE_NAV_WIDTH } from '../../constants/ThemeConstant';
import { navStore } from '../../stores/NavStore';

export default function Footer() {
	const [navState] = useRecoilState(navStore);

	const getNavWidth = () => {
		if(navState.isNavCollapsed) {
		  return `${SIDE_NAV_COLLAPSED_WIDTH}px`
		} else {
		  return `${SIDE_NAV_WIDTH}px`
		}
	  }

	return (
		<footer className="footer" style={{ marginLeft: getNavWidth() }}>
			<span>Copyright  &copy;  {`${new Date().getFullYear()}`} <span className="font-weight-semibold">{`${APP_NAME}`}</span> All rights reserved.</span>
			<div>
				<a className="text-gray" href="/#" onClick={e => e.preventDefault()}>Term & Conditions</a>
				<span className="mx-2 text-muted"> | </span>
				<a className="text-gray" href="/#" onClick={e => e.preventDefault()}>Privacy & Policy</a>
			</div>
		</footer>
	)
}

