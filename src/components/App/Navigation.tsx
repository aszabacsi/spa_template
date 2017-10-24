import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navigation extends React.Component {
  render() {
    return (
      <Menu>
        <Menu.Item> Main </Menu.Item>
        <Menu.Item> Admin </Menu.Item>
        <Menu.Item> Login </Menu.Item>
        <Menu.Item> Profile </Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;