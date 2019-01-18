import React, { Component } from 'react';
import { Popover } from 'antd';
import NavLink from 'umi/navlink';
import { menu } from '../utils/headerConfig';
import style from './header.less';
import headerIcon from '../assets/logo.png'


class Header extends Component {
  MenuList = list => {
    return (
      <ul>
        {list.map((item,index) => {
          return <li key={index.toString()}><NavLink to={item.path}>{item.name}</NavLink></li>;
        })}
      </ul>
    );
  };

  render() {
    const { children } = this.props;
    return (
      <div className={style['header-box']}>
      <div className="container">
        <div className={style['header-logo']}>前端语言整理系统<img src={headerIcon}/></div>
          <div className={style['header-popover']}>
              {menu.map((item, index) => {
              if (item.children) {
                  const content = this.MenuList(item.children);
                  return (
                  <Popover content={content} key={index.toString()} >
                      <NavLink to={item.path}>
                        {item.name}
                      </NavLink>
                  </Popover>
                  );
              }
              return(
                <span key={index.toString()}> <NavLink to={item.path}>{item.name}</NavLink></span>
              )
              })}
          </div>
      </div>
    </div>
    );
  }
}

export default Header;
