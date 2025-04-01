"use strict";
window.onload = () => {
    const fileSelector = document.querySelector('#fileSelector');
    fileSelector.onchange = (fileSelectorEvent) => {
        const videoPlayer = document.querySelector('#videoPlayer');
        const audioPlayer = document.querySelector('#audioPlayer');
        const fileReader = new FileReader();
        const file = fileSelectorEvent.target.files[0];
        videoPlayer.style.display = "none";
        audioPlayer.style.display = "none";
        fileReader.onload = (eventFileReader) => {
            let player;
            if (file.type.includes('video')) {
                player = document.querySelector('#videoPlayer');
            }
            else if (file.type.includes('audio')) {
                player = document.querySelector('#audioPlayer');
            }
            else {
                return alert("Arquivo em formato inválido");
            }
            player.querySelector('source').src = eventFileReader.target.result;
            player.style.display = "block";
            player.load();
        };
        fileReader.readAsDataURL(file);
    };
};
