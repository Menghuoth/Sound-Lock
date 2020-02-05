import React, {useState} from 'react';
import { Layout, Menu, Avatar, Row, Col, Input } from 'antd';

import NAV from '../../constants/nav';


const { Header: AntdHeader } = Layout;
const {Search} = Input;

const logoStyle = {
    cursor: 'pointer',
    width: "60px",
    height: "60px",
    float: "left"
};

const Header = props => {

    return (
        <AntdHeader style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'green' }}>
            <Row type="flex" justify="space-between">
                <Col>
                    <Avatar style={logoStyle} src="https://via.placeholder.com/468x60?text=Logo" />
                </Col>
                <Col>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={NAV[0].key}
                        style={{ lineHeight: '64px', background: 'rgba(0,0,0,0)' }} >
                        {
                            NAV.map(nav => (
                                <Menu.Item
                                    key={nav.key}
                                    onClick={() => { props.redirect(nav.link) }} >
                                    {nav.label}
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Col>
                <Col>
                    <Search
                        placeholder={"Search"}
                    />
                </Col>
            </Row>
        </AntdHeader>

            );
};

export default Header;