import React from 'react';

import ClientLayout from "../layouts/client_layout";
import RegistrationForm from "../components/Register/register";


const RegisterPage = props => {
    return (
        <ClientLayout pageKey="login">
            <RegistrationForm/>
        </ClientLayout>
    );
};

export default RegisterPage;