let randomQuotes = [
    'hashir is a coder',
    'hashir is a perfect person',
    'hashir is a hero and he is certified by aliens',
    "who don't knows hashir",
    'hashir is in a group'
]

let btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click',()=>{
    let math = Math.floor(Math.random()*randomQuotes.length)
    document.getElementsByClassName('para')[0].innerHTML=`"${randomQuotes[math]}"`
})