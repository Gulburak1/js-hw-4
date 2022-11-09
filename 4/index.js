let  btn = document.querySelector('#btn');
btn.addEventListener ('click', () => {
    btn.style.display = 'none';
})


let btnEvent = document.querySelector('#button');

btnEvent.addEventListener('click', 
function showAlert(){ 
    let firstIn = document.querySelector('#login').value;
    let secondIn = document.querySelector('#password').value;
    let thirdIn = document.querySelector('#confirmPassword').value;
    if (document.querySelector('#login').value =='')
    {   
        alert('нет логина')
    }
    else{
        if (document.querySelector('#password').value =='')
        {   
            alert('нет пароля')
        }
    }
    if (document.querySelector('#password').value !== '#confirmPassword')
    {   
        alert('пароли не совпадают')
    }
    
    
})



let num;
console.log(num);
