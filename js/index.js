
window.onload = function () {
    const zoomElement = document.getElementById("vrOutlineImg");
    let zoomedItem = 1;
    // const ZOOM_SPEED = 0.01;
    let showBox = false;
    let changingText = true;

    setInterval(function () {
        if (changingText) {
            document.getElementById("changingWords").style.marginTop = "-83px";
        } else {
            document.getElementById("changingWords").style.marginTop = "0px";
        }
        changingText = !changingText;
    }, 4000);

    document.addEventListener("wheel", function(e) {
        // console.log(e.deltaY, e.deltaX);  
        // zoomedItem = getScrollPercent()/100;
        // if(e.deltaY > 0 && zoomedItem > 0.2){    
        //     zoomElement.style.transform = `scale(${zoomedItem -= ZOOM_SPEED})`;  
        // }else if (e.deltaY < 0 && zoomedItem < 1){    
        //     zoomElement.style.transform = `scale(${zoomedItem += ZOOM_SPEED})`;  }
        // let scroll = getScrollPercent()/100;
        // console.log(scroll);
        // if (scroll < 1 && scroll > 0.5) {
        //     zoomElement.style.transform = `scale(${1 - scroll})`;  }
        if (e.deltaY > 0 && e.deltaX == 0) {
            showBox = true;
        } else if (e.deltaY < 0 && e.deltaX == 0) {
            showBox = false;
        }
    });
};

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}