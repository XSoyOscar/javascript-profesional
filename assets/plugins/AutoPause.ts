import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;
    private pausedByScroll: boolean;
    private pausedByVisibility: boolean;

    constructor() {
        this.threshold = 0.25;
        //Importante, la siguiente linea se puso para decirle que el this
        // es en toda la clase y no unicamente en la llamada puesto que al 
         //llamar a la función handlerIntersection toma el this de 
         //intersectionObserver
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
        this.pausedByScroll = false;
        this.pausedByVisibility = false;
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })

        observer.observe(player.media)


        document.addEventListener("visibilitychange", this.handlerVisibilityChange)

    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        // const isVisible = entry.intersectionRatio >= this.threshold

        if (entry.isIntersecting) {
            if(this.pausedByScroll){
                this.pausedByScroll = false;
                this.player.play();
            }
        } else {
            if(!this.player.media.paused) {
                this.pausedByScroll = true;
                this.player.pause();
            }
        }

    }

    private handlerVisibilityChange() {
        const isVisible = document.visibilityState === "visible"

        if (isVisible) {
            if(this.pausedByVisibility) {
                this.pausedByVisibility = false;
                this.player.play()
            }

        } else {
            if(!this.player.media.paused) {
                this.pausedByVisibility = true;
                this.player.pause()
            }
        }
    }
}

export default AutoPause;