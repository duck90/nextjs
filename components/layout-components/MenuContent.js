import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

import { Menu } from "antd";
import Icon from "../util-components/Icon";
import navigationConfig from "../../configs/NavigationConfig";
import { NAV_TYPE_SIDE } from "../../constants/ThemeConstant";

const { SubMenu } = Menu;

const setDefaultOpen = (key) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};

const SideNavContent = (props) => {
	const { hideGroupTitle } = props;
  const router = useRouter();

  useEffect(() => {
    if (!getCookie('jwt')) {
      router.replace('/login');
    } else {
      setDefaultOpen(router.pathname);
    }
  }, []);

  return (
    <Menu
      theme="light"
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      defaultSelectedKeys={router.pathname.replace('/', '')}
      defaultOpenKeys={setDefaultOpen(router.pathname)}
      className={hideGroupTitle ? "hide-group-title" : ""}
    >
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <Menu.ItemGroup
            key={menu.key}
            title={menu.title}
          >
            {menu.submenu.map((subMenuFirst) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  icon={
                    subMenuFirst.icon ? (
                      <Icon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  key={subMenuFirst.key}
                  title={subMenuFirst.title}
                >
                  {subMenuFirst.submenu.map((subMenuSecond) => (
                    <Menu.Item key={subMenuSecond.key}>
                      {subMenuSecond.icon ? (
                        <Icon type={subMenuSecond?.icon} />
                      ) : null}
                      <span>
                        {subMenuSecond.title}
                      </span>
                      <a onClick={() => router.push(subMenuSecond.path)} to={subMenuSecond.path} />
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={subMenuFirst.key}>
                  {subMenuFirst.icon ? <Icon type={subMenuFirst.icon} /> : null}
                  <a onClick={() => closeMobileNav()} to={subMenuFirst.path} />
                </Menu.Item>
              )
            )}
          </Menu.ItemGroup>
        ) : (
          <Menu.Item key={menu.key}>
            {menu.icon ? <Icon type={menu?.icon} /> : null}
            {/* <span>{setLocale(localization, menu?.title)}</span> */}
            {menu.path ? <a onClick={() => console.log(menu.path)} to={menu.path} /> : null}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

const MenuContent = (props) => {
  return props.type === NAV_TYPE_SIDE ? (
    <SideNavContent {...props} />
  ) : null;
};

export default MenuContent;
