document.querySelector('[ruchka="search"]').addEventListener('click',()=>{
    const x = document.querySelector('[tumbochka="search"]').value
    window.location = 'https://www.google.com/search?q=' + x
})
document.querySelector('[ruchka="image"]').addEventListener('click',()=>{
    const x = document.querySelector('[tumbochka="image"]').value
    window.location = 'https://www.google.com/search?q=' + x + '&tbm=isch'
})
document.querySelector('.lucky').addEventListener('click',()=>{
    window.location = 'https://www.google.com/doodles'
})
document.querySelector('[ruchka="advance"]').addEventListener('click',()=>{
    const a1 = document.querySelector('[tumbochka="advance1"]')
    const a2 = document.querySelector('[tumbochka="advance2"]')
    const a3 = document.querySelector('[tumbochka="advance3"]')
    const a4 = document.querySelector('[tumbochka="advance4"]')
    let endpoint = 'https://images.google.com/search?q='
    let search = false
    if (a1.value !== ''){
        endpoint = endpoint + a1.value
        search = true
    }
    if(a2.value !== ''){
        endpoint = endpoint + ' '+  a2.value
        search = true
    }
    if(a3.value !== ''){
        endpoint = endpoint + ' "' + a3.value + '"'
        search = true
    }
    if(a4.value !== ''){
        endpoint = endpoint + ' -' + a4.value
        search = true
    }
    if(search){
        window.location = endpoint
    }
})
