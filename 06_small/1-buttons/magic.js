const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey') {
            body.style.backgroundColor = "rgb(14, 0, 78)";
            body.style.color = "#fff";
        }else
        if(e.target.id === 'pearl') {
            body.style.backgroundColor = "antiquewhite";
            body.style.color = "rgb(58, 3, 3)";
        }else
        if(e.target.id === 'amber') {
            body.style.backgroundColor = "rgb(255, 125, 197)";
            body.style.color = "rgb(14, 0, 78)";
        }else
        if(e.target.id === 'honey') {
            body.style.backgroundColor = "rgb(147, 83, 0)";
            body.style.color = "rgb(123, 255, 0)";
        }
    })
})

