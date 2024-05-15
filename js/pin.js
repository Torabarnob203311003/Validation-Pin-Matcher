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

  document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText
      const inputfeild = document.getElementById('input-feild')
        const previousinputfeild =inputfeild.value;
    if(isNaN(number)){

        if(number === 'C'){


            inputfeild.value = ' ';

        }
        else if(number === '<')
        {
                const digits =previousinputfeild.split('');
                digits.pop();
                const remainDigits = digits.join('');
                 inputfeild.value = remainDigits;


        }
    }
    else{

      
        const newinputfeild = previousinputfeild +number;
        inputfeild.value=newinputfeild
    }

   



  })

   document.getElementById('verify-button').addEventListener('click',function(){

       const displaypinfeild = document.getElementById('display-pin')
       const currentfeild = displaypinfeild.value;
       const inputnumberfeild = document.getElementById('input-feild')
       const currentinputfeild = inputnumberfeild.value

        if( currentfeild === currentinputfeild){

            console.log('correct pin')
        }
        else{

            console.log('incorrect pin')
        }

   })