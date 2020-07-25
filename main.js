document.querySelector('.galary').addEventListener('click',(e)=>{
    if(e.target.closest('.container').classList.contains("slide")){
        return;
    }
    let ele = document.querySelector('.slide');
    if(ele){
        ele.className = "container"
    }
    e.target.closest('.container').classList.toggle('slide');
    e.target.closest('.container').classList.toggle('setUp');
})