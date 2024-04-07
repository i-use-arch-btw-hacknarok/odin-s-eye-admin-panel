import React, {useEffect, useState} from 'react';
import { Container, Button, Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookLogin from 'react-facebook-login';
import {useNavigate} from "react-router-dom";


interface props {
    children: any
}
//@ts-ignore
const Login: React.FC = ({children}: props) => {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response: any) => {
        setData(response);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    useEffect(() => {
        if(login) {
            navigate("/");
        }
    }, [login]);

    // @ts-ignore
    return (
        <><FacebookLogin
            appId={''}
            autoLoad={true}
            fields="name, email, picture"
            scope="public_profile,email"
            callback={responseFacebook}
            // @ts-ignore
            render={(renderProps) => (
                <></>
            )}/>
            <div>
                {children}
            </div>
        </>
    );
};

export default Login;
