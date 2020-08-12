class Score {
    constructor() {
        this.currentEl = document.querySelector('current');
        this.toWinEl = document.querySelector('toWin');
    }
    init(settings) {
        this.setting = settings;
    }
    setToWin(text) {
        this.toWinEl.textContent = text;
    }

}