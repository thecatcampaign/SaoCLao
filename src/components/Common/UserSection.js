import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import _ from 'lodash';
import { useAuth } from '../../contexts/AuthContext';

export default function UserSection() {
  const { signOut, user } = useAuth();

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={signOut}>Signout</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          {_.get(user, 'username')}
          {' '}
          <Icon type="down" />
        </a>
      </Dropdown>
    </div>
  );
}
