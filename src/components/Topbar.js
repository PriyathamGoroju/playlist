import React from "react";
import {Button} from '@mui/material'
export default function Topbar({ addSong }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:'center' }}>
            <h1>Songs</h1>
            <Button
                onClick={addSong}
                variant="contained"
                style={{ backgroundColor: "orange", color:'black', height:'40px'}}
                sx={{ textTransform: "none" }}
            >
                Add songs
            </Button>
        </div>
    );
}
