import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads'

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads(),
    ]
});


const playButton: HTMLElement = document.querySelector("#play-button");
playButton.onclick = () => player.tooglePlay();

const mute_button: HTMLElement = document.querySelector("#mute-button");
mute_button.onclick = () => player.toogleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}