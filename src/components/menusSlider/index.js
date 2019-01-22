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
              <SubMenu key={item.key.toString()} title={<span>{item.value}</span>}>
                {this.ItemMemu(item.SubMenu)}
              </SubMenu>
            );
          }
          return <Menu.Item key={item.key.toString()}>{item.value}</Menu.Item>;
        });
        return menuTy;
      };

      render() {
        let config = typeof menuType === 'string' ? menuConfig[menuType] : menuType(this.props);
        let menuSourse = config.dataSourse;
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
          <Layout className={styles['menuSlider']}>
            <Sider>
              <Menu
                mode="inline"
                defaultSelectedKeys={active && [active.key].toString()}
              >
                {this.ItemMemu(menuSourse)}
              </Menu>
            </Sider>
            <div className={styles['right-contanier']}>
              <ComposedComponent {...this.props} />
            </div>
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
