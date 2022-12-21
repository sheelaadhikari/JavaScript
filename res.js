function totalClick(click){
    var totalClicks=document.getElementById("totalClicks");
    var sumvalue= parseInt(totalClicks.innerText)+click;
    console.log(sumvalue+click);
    totalClicks.innerText=sumvalue;

    //no negative
    if(sumvalue<0){
        totalClicks.innerText=0;
    }
    //reset
    if(click===0){
        totalClicks.innerText=0;
    }
     
}