const input =document.getElementById('qr-input');
const button =document.getElementById('qr-btn')
const image =document.getElementById('qr-img')

console.log(input,button,image);

button.addEventListener('click',()=>{
    const inputValue = input.value;

    if(!inputValue){
        alert("Please enter a valid URL");
        return;
    }else{
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue} `;
        image.alt =`QR code for ${inputValue}`;
    }
});