import React, { useContext, useState } from "react";
import {
    Modal,
    Typography,
    TextField,
    Button,
    Input,
    Box,
} from "@mui/material";
import UserStore from "../contexts/UserStore";
import { toast } from "react-toastify";

export default function SongModal({ open, setOpen }) {
    const { setSongs } = useContext(UserStore);
    const [newSong, setNewSong] = useState({
        name: null,
        link: null,
        source: null,
        thumbnail: null,
        date: null,
    });
    const currentDate = new Date();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSong((prevSong) => ({
            ...prevSong,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewSong((prevSong) => ({
                    ...prevSong,
                    thumbnail: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    

    const addNewSong = () => {
        setSongs((prevSongs) => [
            ...prevSongs,
            {
                ...newSong,
                date: currentDate.toISOString(),
            },
        ]);
        setNewSong({
            name: null,
            link: null,
            source: null,
            thumbnail: null,
            date: null,
        });
        toast.success("song added successfully!")
        setOpen(false);
    };

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <div
                    style={{
                        padding: "20px",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        gap: "20px",
                    }}
                >
                    <Typography variant="h6">Add Song</Typography>
                    <TextField
                        label="Song Name"
                        name="name"
                        value={newSong.name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        label="Song Link"
                        name="link"
                        value={newSong.link}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        label="Song Source"
                        name="source"
                        value={newSong.source}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        value=""
                    />
                    <Typography variant="body2">
                        Image has to be of Aspect ration 1:1
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            justifyContent: "end",
                            gap: "10px",
                            display: "flex",
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                setOpen(false);
                            }}
                            sx={{ textTransform: "none" }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addNewSong}
                            sx={{ textTransform: "none" }}
                        >
                            Add
                        </Button>
                    </Box>
                </div>
            </div>
        </Modal>
    );
}
