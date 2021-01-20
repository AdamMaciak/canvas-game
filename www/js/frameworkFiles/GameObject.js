class GameObject {
    constructor(updateStateMilliseconds, delay = 0) {
        /* These are ALWAYS needed */
        this.gameObjectInterval = null; /* set to null when not running */
        this.gameObjectIsDisplayed = false;
        this.updateStateMilliseconds = updateStateMilliseconds; /* change to suit the gameObject state update in milliseconds. Smaller numbers give a faster gameObject update. */
        this.delay = delay; /* delay the start of the updateState() method */
    }

    start() {
        console.log('startObject');
        if ((this.updateStateMilliseconds !== null) && (this.gameObjectInterval === null)) {
            setTimeout(startUpdateStateInterval.bind(this), this.delay);
        } else if (this.updateStateMilliseconds === null) {
            this.gameObjectIsDisplayed = true; // by default, gameObjects that have no updateState() interval should be visible
        }

        function startUpdateStateInterval() // this function is only ever called from inside the start() method
        {
            this.gameObjectInterval = setInterval(this.updateState.bind(this), this.updateStateMilliseconds);
            this.gameObjectIsDisplayed = true;
        }
    }

    stop() {
        if (this.gameObjectInterval !== null) {
            clearInterval(this.gameObjectInterval);
            this.gameObjectInterval = null; /* set to null when not running */
        }
        this.gameObjectIsDisplayed = true;
    }

    stopAndHide() {
        this.stop();
        this.gameObjectIsDisplayed = false;
    }

    //import
    isDisplayed() {
        return (this.gameObjectIsDisplayed);
    }

    //method to change where you compute and change object posotion
    updateState() {
    }


    render() {
    }

    //method where is drawing object
    draw() {

    }

}