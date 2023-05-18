function playSound(e)
{
    if(e.type=="mousedown")
    {
        if(e.target.tagName==="div")
            keyCode = e.target.getAttribute('data-key');
        else
            keyCode = e.target.parentNode.getAttribute('data-key');
    }
    else{
        keyCode = e.keyCode;
    }
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!audio) return;
    audio.play();
    // Higlight the chord being played
    const chord = document.querySelector(`.chord[data-key="${keyCode}"]`);
    chord.classList.add("playing");
}

function pauseSound(e)
{
    if(e.type=="mouseup")
    {
        if(e.target.tagName==="div")
            keyCode = e.target.getAttribute('data-key');
        else
            keyCode = e.target.parentNode.getAttribute('data-key');
    }
    else{
        keyCode = e.keyCode;
    }
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!audio) return;
    audio.pause();
    audio.currentTime=0;
    // UnHiglight the chord being played
    const chord = document.querySelector(`.chord[data-key="${keyCode}"]`);
    chord.classList.remove("playing");
}
window.addEventListener("keydown",playSound);
window.addEventListener("keyup",pauseSound);
window.addEventListener("mousedown",playSound);
window.addEventListener("mouseup",pauseSound);