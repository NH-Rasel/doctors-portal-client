import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import Navigation from '../../../Shared/Navigation/Navigation';

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegisterSubmit = e => {

        e.preventDefault();
    }
    return (
        <div>
            <Navigation />
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>Register
                        </Typography>
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="email"
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                onChange={handleOnChange} variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                type="password"
                                id="standard-basic"
                                label=" Re-TypeYour Password"
                                name="password2"
                                onChange={handleOnChange} variant="standard" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <Typography variant="body1">
                                Already Registered?
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button sx={{ m: 1 }} variant="text">Login</Button>
                                </NavLink>
                            </Typography>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={login} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;