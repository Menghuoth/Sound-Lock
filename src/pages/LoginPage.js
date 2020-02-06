import React from 'react';

import ClientLayout from "../layouts/client_layout";
import LoginForm from "../components/Login/login";


const LoginPage = props => {
    return (
        <ClientLayout pageKey="login">
            <LoginForm/>
        </ClientLayout>
    );
};

export default LoginPage;