// Selectors

const btn = document.querySelector('#btn');
const box = document.querySelector('#box')






// Function
async function info(data){
    const url = `https://restcountries.com/v3.1/name/${data}`;
    const value = await fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        box.classList.remove('error')
        const flag = data[0].flags['png'];
        const name = data[0].name['common'];
        const capital = data[0].capital[0];
        const subregion = data[0].subregion;
        const language = data[0].languages;
        let languages = ''
        for (const key in language) {
            languages += language[key] + ' , '
        }
        languages = languages.slice(0,length-2);
        const currency = data[0].currencies;
        let currencies = []
        for (const key in currency) {
            let keys = currency[key]
            for (const key in keys) {
                currencies.push(keys[key])
            }
        };
        let cunsymbol = '';
        currencies.forEach((value)=>{
            cunsymbol += value + ' ';
        })
        const population = data[0].population;
        box.innerHTML = `
        <div class="img"><img src="${flag}" alt="Flag"></div>
        <p>Name:- ${name}.</p>
        <p>Capital:- ${capital}.</p>
        <p>SubRegion:- ${subregion}.</p>
        <p>Language:- ${languages}.</p>
        <p>Currency:- ${cunsymbol}.</p>
        <p>Population:- ${population}.</p>
        `
    }).catch((error)=>{
        box.innerHTML = '';
        console.log("find some error")
        setTimeout(() => {
            box.classList.add('error')
        },100);
    })
    // try {
    //     const value = await fetch(url);
    //     return await value.json()
    // } catch (error) {
    //     console.log('find some error')
    // }
}



btn.addEventListener('click' ,(e)=>{
    const input = document.querySelector('#search');
    e.preventDefault();
    let data = input.value
    if(data === 'India' || data === 'india'){
        data = 'Republic of India';
    }
    info(data);
})