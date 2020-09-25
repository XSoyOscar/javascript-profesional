import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ]
});


const button = document.querySelector("#play-button");
button.onclick = () => player.tooglePlay();

const mute_button = document.querySelector("#mute-button");
mute_button.onclick = () => player.toogleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}