window.onload = () : void => {
    const fileSelector : HTMLInputElement = document.querySelector('#fileSelector') as HTMLInputElement
    
    fileSelector.onchange = (fileSelectorEvent) : void => {
        const videoPlayer : HTMLMediaElement = (document.querySelector('#videoPlayer') as HTMLMediaElement)
        const audioPlayer : HTMLMediaElement = (document.querySelector('#audioPlayer') as HTMLMediaElement)
        const fileReader : FileReader = new FileReader()
        const file : File = ((fileSelectorEvent.target as HTMLInputElement).files as FileList)[0]
        
        videoPlayer.style.display = "none"
        audioPlayer.style.display = "none"

        fileReader.onload = (eventFileReader : ProgressEvent<FileReader>) : void => {
            let player : HTMLMediaElement;
            
            if (file.type.includes('video')) {
                player = document.querySelector('#videoPlayer') as HTMLMediaElement
            } else if (file.type.includes('audio')) {
                player = document.querySelector('#audioPlayer') as HTMLMediaElement
            } else {
                return alert("Arquivo em formato inválido")
            }
            
            (player.querySelector('source') as HTMLSourceElement).src = ((eventFileReader.target as FileReader).result as string)
            player.style.display = "block";
            player.load();
        }

        fileReader.readAsDataURL(file)
    }
}