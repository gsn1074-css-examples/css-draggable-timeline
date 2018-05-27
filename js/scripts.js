var drag = document.getElementById('drag');

//set drag to end of timeline
var dragLeftAtEndOfTimeLine = window.innerWidth - 3000; //timeline is 3000px wide
drag.style.left = dragLeftAtEndOfTimeLine + 'px';

function startMoving(evt) {

    evt = evt || window.event;
    
    var mouseX = evt.clientX;

    var dragCurrentLeft = drag.style.left;
    dragCurrentLeft = dragCurrentLeft.replace('px', ''); //remove unit for calc
    
    var diffX = mouseX - dragCurrentLeft;

    document.onmousemove = function(evt) 
    {
        evt = evt || window.event;
        
        var mouseX = evt.clientX;
        var newX = mouseX - diffX;
        
        if (newX > 0) {
        
            newX = 0;
        }
        if (newX < dragLeftAtEndOfTimeLine) { 
        
            newX = dragLeftAtEndOfTimeLine;
        }

        drag.style.left = newX + 'px';
    }
}

function stopMoving() {
    document.onmousemove = function() {}
}