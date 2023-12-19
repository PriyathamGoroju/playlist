import React, { useContext, useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { noAuth } from "../../apis";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserStore from "../../contexts/UserStore";

function Verify() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const {phoneNumber} = useContext(UserStore);
    const navigate = useNavigate();

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };
    const changeOTP =() =>{
        setOtp(["", "", "", ""])
        toast.success('OTP sent to your mobile');
        // navigate("/verify");
        // noAuth({
        //     method: "GET",
        //     url: "/auth/login",
        //     data:{phoneNumber:phoneNumber}
        // }).then((res) => {
        //     toast.success('OTP sent to your mobile')
        //     localStorage.setItem("reqId", res.requestId);
        //     navigate("/verify");
        // });
    }

    const handleClick = () => {
        // const enteredOtp = otp.join("");
        navigate("/home");
        // noAuth({
        //     method: "GET",
        //     url: "/auth/verify",
        //     data: {
        //         phoneNumber: "1234567890",
        //         requestId: localStorage.getItem("reqId"),
        //         otp: enteredOtp,
        //     },
        // })
        //     .then((res) => {
        //         localStorage.setItem("token", res.token);
        //         localStorage.removeItem("reqId");
        //         navigate("/home");
        //     })
        //     .catch((error) => {
        //         console.error("Error during OTP verification:", error);
        //         toast.error("Failed to verify OTP. Please try again.");
        //     });
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
                <Typography
                    variant="h4"
                    style={{ fontWeight: "bold", color: "purple" }}
                >
                    Enter OTP
                </Typography>
                <div> We have sent OTP to +91{phoneNumber}. Please enter the OTP sent to your phone</div>
                <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    {otp.map((digit, index) => (
                        <TextField
                            style={{ width: "55px", margin: "0px" }}
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "[0-9]*",
                                maxLength: 1,
                            }}
                            key={index}
                            type="text"
                            variant="outlined"
                            value={digit}
                            onChange={(e) =>
                                handleChange(index, e.target.value)
                            }
                        />
                    ))}
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    disabled={!otp.every((digit) => digit !== "")}
                >
                    Verify OTP
                </Button>
                <Button
                    onClick={() => {changeOTP()}}
                    sx={{
                        textTransform: "none",
                        padding: "0px",
                        margin: "0px",
                        fontSize: "small",
                    }}
                >
                    Resend OTP
                </Button>
                <Button
                    onClick={() => {
                        navigate("/login");
                    }}
                    sx={{
                        textTransform: "none",
                        padding: "0px",
                        fontSize: "small",
                        marginTop: "-20px",
                    }}
                >
                    Change Phone number
                </Button>
            </Box>
        </Box>
    );
}

export default Verify;
