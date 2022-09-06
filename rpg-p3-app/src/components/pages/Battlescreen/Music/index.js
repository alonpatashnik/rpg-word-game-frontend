import { useState } from 'react';
import './Media/Arabe-Africano.m4a';
import './Media/Game-fight.m4a';
import './Wii-Type-Tumbao.m4a';

// Okay, so we have 3 songs that need to play
// -- one for the fight screen
// -- one for the VN
// -- one for the title screen (???)

// I'm going to write out this basic form, but I need all 3 songs to (a) loop, and (b) play for each section?

// Game Fight
const playFirst = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    //this is where it gets funky, I'd need it to play when battle starts/ends
    return (
        <div>
            
        </div>
    )
}

// VN section
const playSecond = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    //this is where it gets funky, I'd need it to play when battle starts/ends
    return (
        <div>
            
        </div>
    )
}

//Game Menu
const playThird = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    //this is where it gets funky, I'd need it to play when battle starts/ends
    return (
        <div>
            
        </div>
    )
}