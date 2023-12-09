import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";
import SongModal from "../../components/SongModal";
import Playlist from "../../components/Playlist";
import MediaPlayer from "../../components/MediaPlayer";
const drawerWidth = 240;
export default function Home() {
    const [open, setOpen] = useState(false);
    const addSong = () => {
        setOpen(true);
    };
    return (
        <div>
            <Navbar />
            <main style={{ marginLeft: drawerWidth, padding: "10px 30px" }}>
                <Topbar addSong={addSong} />
                <SongModal open={open} setOpen={setOpen} />
                <Playlist />
                <MediaPlayer />
            </main>
        </div>
    );
}
