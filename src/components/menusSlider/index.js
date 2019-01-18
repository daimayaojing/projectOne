import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import menuConfig from './menuConfig';
import styles from './menuSlider.less';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const menuSlider = ComposedComponent => {
  return function(menuType) {
    class muneWith extends Component {
      static displayName = menuSlider(`${getDisplayName(ComposedComponent)}`);
      constructor(props) {
        super(props);
        this.state = {};
      }
      locationMenu = (location, menu) => {
        if (location && location.pathname === menu.path) {
          return true;
        } else {
          return menu.match && menu.match(location);
        }
      };
      findMenu = (location, menu) => {
        for (let i = 0; i < menu.length; i++) {
          if (this.locationMenu(location, menu[i])) {
            return menu[i];
          }
        }
      };

      ItemMemu = menuSourse => {
        let menuTy = menuSourse.map(item => {
          if (item.SubMenu) {
            return (
              <SubMenu key={item.key} title={<span>{item.value}</span>}>
                {this.ItemMemu(item.SubMenu)}
              </SubMenu>
            );
          }
          return <Menu.Item key={item.key}>{item.value}</Menu.Item>;
        });
        return menuTy;
      };

      render() {
        let config = typeof menuType === 'string' ? menuConfig[menuType] : menuType(this.props);
        let menuSourse = config.dataSourse;
        const defaultOpenKeys = config.defaultOpenKeys;
        const active = this.findMenu(this.props.location, menuSourse);

        if (
            !menuType ||
            (typeof menuType === 'string' && !menuConfig[menuType]) ||
            (typeof menuType !== 'string' && typeof menuType !== 'function')
          ) {
            console.error('当前菜单类型不存在');
            return <div>当前菜单类型不存在</div>;
          }

        return (
          <Layout className={styles.menuSlider}>
            <Sider>
              <Menu
                mode="inline"
                defaultOpenKeys={defaultOpenKeys}
                defaultSelectedKeys={active ? [active.key] : ''}
              >
                {this.ItemMemu(menuSourse)}
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <ComposedComponent {...this.props} />
              </Content>
            </Layout>
          </Layout>
        );
      }
    }
    return muneWith;
  };
};
function getDisplayName(getComponent) {
  return getComponent.displayName || getComponent.name || 'Component';
}

export default menuSlider;
