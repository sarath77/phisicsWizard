import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    if (isAuthenticated) {
        return <div>Welcome, {user.name}!</div>;
    } else {
        return <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>;
    }
};

export default LoginButton;
