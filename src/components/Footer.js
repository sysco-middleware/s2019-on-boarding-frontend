import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Menu inverted fluid widths={1}>
          <Menu.Item>
            Sysco - Onboard process in Camunda
          </Menu.Item>
        </Menu>
      </footer>
    )
  }
}
