import React, { useContext } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
import UserStore from "../contexts/UserStore";

export default function Playlist() {
    const { songs, setSongs, setPlaySong } = useContext(UserStore);

    const handleDelete = (index) => {
        const updatedSongs = [...songs];
        updatedSongs.splice(index, 1);
        setSongs(updatedSongs);
    };
    const handlePlay = (song) => {
        setPlaySong(song);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "40%" }}>
                            Song Name
                        </TableCell>
                        <TableCell>Source</TableCell>
                        <TableCell>Added On</TableCell>
                        <TableCell> </TableCell>
                        <TableCell> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songs &&
                        songs?.map((song, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <img
                                        src={song.thumbnail}
                                        width="40px"
                                        height="40px"
                                        style={{
                                            objectFit: "cover",
                                            margin: "0px 10px 0px 0px",
                                        }}
                                    ></img>
                                    {song.name}
                                </TableCell>
                                <TableCell>{song.source}</TableCell>
                                <TableCell>
                                    {song.date.substring(0, 10)}
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="play"
                                        onClick={() => handlePlay(song)}
                                    >
                                        <PlayArrowIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => handleDelete(index)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
