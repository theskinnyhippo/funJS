const f = document.querySelector('form')

f.addEventListener('submit',function(e){
    e.preventDefault()

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);

    const res = document.querySelector('#results');

    if(h <= 30 || isNaN(h) || h === ''){
        res.innerHTML = `${h} is not valid, please give a valid height`;
        console.log(h)
    }else if(w <= 30 || isNaN(w) || w === ''){
        res.innerHTML = `${w} is not valid, please give a valid height`;
        console.log(w)
    }else{
        const bmi = (w*10000/(h*h)).toFixed(3);
        let m;
        if(bmi < 18.6){
            m = "underweight"
        }else if(bmi < 24.9){
            m = "perfect"
        }else{
            m = "overweight"
        }
        res.innerHTML = `<span>${bmi} and you're ${m}</span>`
    }
})