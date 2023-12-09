import React from "react";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const drawerWidth = 240;

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
        console.log("clicked");
    };
    return (
        <div style={{ display: "flex" }}>
            <Drawer
                variant="permanent"
                style={{
                    width: drawerWidth,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    position: "fixed",
                }}
                PaperProps={{
                    style: {
                        width: drawerWidth,
                    },
                }}
            >
                <>
                    <h1 style={{ color: "purple", textAlign: "center" }}>
                        Logo
                    </h1>
                    <Button
                        onClick={handleClick}
                        sx={{
                            textTransform: "none",
                            justifyContent: "flex-start",
                            padding: "10px 30px",
                        }}
                    >
                        Songs
                    </Button>
                </>
            </Drawer>
        </div>
    );
};

export default Navbar;
