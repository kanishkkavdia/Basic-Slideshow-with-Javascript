let images=[];
let i=0;
images[0]='country.jpg'
images[1]='city.jpg'
images[2]='ocean.jpg'
function change(){
    document.slider.src=images[i];
    if(i<(images.length-1)){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("change()",3000);
}
window.onload=change;
