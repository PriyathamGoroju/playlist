import React, { useRef, useState, useContext } from "react";
import { Box, IconButton, Typography, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import UserStore from "../contexts/UserStore";

const MediaPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const { playSong, songs, setPlaySong } = useContext(UserStore);

    const togglePlayPause = async () => {
        try {
            if (isPlaying) {
                await audioRef.current.pause();
            } else {
                await audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        } catch (error) {
            console.error("Playback error:", error);
        }
    };

    const handleNextSong = () => {
        const currentIndex = songs.findIndex((song) => song === playSong);
        const nextIndex = (currentIndex + 1) % songs.length;
        setPlaySong(songs[nextIndex]);
        setIsPlaying(false);
        setAudioProgress(0);
    };

    const handlePrevSong = () => {
        const currentIndex = songs.findIndex((song) => song === playSong);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setPlaySong(songs[prevIndex]);
        setIsPlaying(false);
        setAudioProgress(0);
    };

    const handleSliderChange = (event, newValue) => {
        setAudioProgress(newValue);
        audioRef.current.currentTime = newValue;
    };

    const handleAudioTimeUpdate = () => {
        setAudioProgress(audioRef.current.currentTime);
    };

    return (
        <Box style={{bottom:'0px', position:'fixed', left:'240px', right:'0px'}}>
            {playSong && (
                <>
                    <>
                        <Box sx={{ width: "100%" }}>
                            <Slider
                                value={audioProgress}
                                max={audioRef.current?.duration || 0}
                                onChange={handleSliderChange}
                                aria-label="audio-seek"
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box display='flex' flexDirection="row" sx={{alignItems:'center'}}>
                                <img
                                    src={playSong.thumbnail}
                                    alt="song thumbnail"
                                    style={{
                                        height: "60px",
                                        width: "60px",
                                        objectFit: "cover",
                                        margin:'0px 20px 0px 0px'
                                    }}
                                ></img>
                                <Typography variant="body2">
                                    {playSong.name}
                                </Typography>
                            </Box>

                            <Box>
                                <IconButton onClick={handlePrevSong}>
                                    <SkipPreviousIcon />
                                </IconButton>
                                <audio
                                    ref={audioRef}
                                    src={playSong?.link}
                                    onTimeUpdate={handleAudioTimeUpdate}
                                />
                                <IconButton onClick={togglePlayPause}>
                                    {isPlaying ? (
                                        <PauseIcon />
                                    ) : (
                                        <PlayArrowIcon />
                                    )}
                                </IconButton>
                                <IconButton onClick={handleNextSong}>
                                    <SkipNextIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </>
                </>
            )}
        </Box>
    );
};

export default MediaPlayer;
