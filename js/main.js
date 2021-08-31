
const cardToggler = document.querySelector(".card__toggler");
const cardPrices = document.querySelectorAll(".card__price");

let isYearlyPricingOn = false;

cardToggler.addEventListener("click", () => {
    cardToggler.classList.toggle("on");

    
    setTimeout(() => {
        changePrice();
    }, 200)
})

function changePrice(){

    if(cardToggler.classList.contains("on")){
        let currPrice = +cardPrices[0].textContent.slice(1);

        cardPrices.forEach(price => {
            price.textContent = "$" + (currPrice  - currPrice / 4).toFixed(2);
        })

        isYearlyPricingOn = true;
    }else{
        let currPrice = +cardPrices[0].textContent.slice(1);

        cardPrices.forEach(price => {
            price.textContent = "$" + (currPrice *4/ 3).toFixed(2);


        })
        isYearlyPricingOn = false;
    }

}


/*****************************\
    # Range Slider Start
\*****************************/

const rangeSlider = document.querySelector(".card__range");
const cardViews = document.querySelector(".card__views");

document.addEventListener("DOMContentLoaded", () => {
    rangeSlider.value = 50;
    rangeSlider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)`

})

rangeSlider.addEventListener("input", (e) => {
    const x = e.target.value + "%";
    rangeSlider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${x}, hsl(224, 65%, 95%) ${x})`

    const value = +e.target.value;
    const views = 2 * value;

    cardViews.textContent = views;

    cardPrices.forEach(price => {
        if(isYearlyPricingOn){
            price.textContent = "$" + (24 * value/100).toFixed(2);
        }else{
            price.textContent = "$" + (32 * value/100).toFixed(2);
        }

    })
})

/*****************************\
    # Range Slider End
\*****************************/





