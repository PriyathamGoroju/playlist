import React, { useContext, useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { noAuth } from "../../apis";
import { useNavigate } from "react-router-dom";
import UserStore from "../../contexts/UserStore";

function Login() {
    const [number, setNumber] = useState("");
    const navigate = useNavigate();
    const {setPhoneNumber} = useContext(UserStore)

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        setPhoneNumber(number);
        noAuth({
            method: "GET",
            url: "/auth/login",
            // data:{phoneNumber:number}
        }).then((res) => {
            localStorage.setItem("reqId", res.requestId);
            navigate("/verify");
        });
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                maxWidth="400px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="start"
                gap="20px"
            >
                <Typography variant="h4" style={{fontWeight:'bold', color:'purple'}}>Sign in</Typography>
                <Typography variant="body2">
                    Please enter your mobile number to login. We will send you a
                    OTP
                </Typography>
                <TextField
                    label="Phone Number"
                    type="number"
                    variant="outlined"
                    value={number}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    disabled={number.length === 10 ? false : true}
                    onClick={handleClick}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
