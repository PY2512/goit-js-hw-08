let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let myStorage = localStorage;

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


player.on('timeupdate', throttle(event => {
    myStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000));

const getTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(getTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});