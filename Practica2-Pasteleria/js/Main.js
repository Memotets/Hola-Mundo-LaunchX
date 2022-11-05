function changeSrc(obj){
    //cambiar menu activo
    let allLinks = document.getElementsByClassName('links');
    console.log(allLinks);
    for(let i = 0; i < allLinks.length; i++){
        allLinks[i].classList.remove('active');
    }
    obj.classList.add('active');
    //cambiar src de iframe
    let iframe = document.getElementsByClassName('injectContent')[0];
    iframe.src = obj.href;
    return false;
}
