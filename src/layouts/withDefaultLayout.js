import React from 'react';
import { Layout } from 'antd';
import { useHistory } from "react-router";

import Header from '../components/layouts/Header';


const { Content, Footer } = Layout;

const withDefaultLayout = Page => {
    return props => {
        const routeHistory = useHistory();
        const redirect = url => {
            routeHistory.push(url);
        };

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Header redirect={redirect}/>
                <Content style={{marginTop: 64}}>
                    <Page {...props}/>
                </Content>
                <Footer style={{textAlign: 'center'}}>Sound Lock ©2020 Created by Sound Lock</Footer>
            </Layout>
        );
    };
}

export default withDefaultLayout;