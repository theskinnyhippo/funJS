const cl = document.querySelector('#display')

setInterval(function(){
    let date = new Date()
    cl.innerHTML = date.toLocaleTimeString();
}, 1000)