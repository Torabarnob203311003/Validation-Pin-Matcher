 function getpin(){

    const pin =generatepin();
    const pinstring =pin +'';
    if(pinstring.length  ===4){

        return pin;
    }
    else{
        return getpin() ; 
       }
 }


function generatepin(){

    const random = Math.round(Math.random()*10000)
    return random;
}

 document.getElementById('generate-pin').addEventListener('click',function(){

  const pin = getpin()
//   console.log(pin)
  const displayPinfeild =document.getElementById('display-pin')
  displayPinfeild.value = pin;

 })