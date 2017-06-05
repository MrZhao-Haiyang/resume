~(function(desW){
    document.documentElement.style.fontSize=document.documentElement.clientWidth*100/desW+"px"
})(640);

var mySwiper=new Swiper(".swiper-container",{
    direction:"vertical",
    loop:true,
    onTransitionEnd:function(swiper){
        var slideAry=swiper.slides;
        var curIndex=swiper.activeIndex;
        var targetId="page0";
        var len=slideAry.length;
        switch (curIndex){
            case 0:
                targetId+=len-2;
                break;
            case len-1:
                targetId+=1;
                break;
            default:
                targetId+=curIndex;
        }
        [].forEach.call(slideAry,function(item,index){
            if(curIndex===index){
                item.id=targetId;
            }else{
                item.id="";
            }
        })
    }
})
~(function(){
    var music=document.getElementById("music");
    var audio=document.getElementById("audio");
    music.addEventListener("click",function(){
        if(audio.paused){
            audio.play();
            music.className='music move';
        }else{
            audio.pause();
            music.className="music"
        }
    },false);
    window.setTimeout(function(){
        audio.play();
        audio.addEventListener('canplay',function(){
            music.style.display='block';
            music.className='music move';
        },false);
    },1000);

})();