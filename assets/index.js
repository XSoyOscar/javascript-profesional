import MediaPlayer from './MediaPlayer.js ';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video, 
    plugins: [
        //new AutoPlay()
    ]
});

const button = document.querySelector("#play-button");
button.onclick = () => player.tooglePlay();

const mute_button = document.querySelector("#mute-button");
mute_button.onclick = () => player.toogleMute();
