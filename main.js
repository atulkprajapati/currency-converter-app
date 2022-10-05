document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currency-converter").addEventListener("submit", (event) => {
        event.preventDefault();

        const {target: {to, from, amount}} = event;
        let headers = new Headers();
        headers.append("apikey", "dlVRHNlnyY1eYmiAaE3GLyXcB6POqevl");
        const requestOptions = {
            method:"GET",
            headers, 
        }

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)  //template lateral syntax
        .then(response => response.json())
        .then(data => {
            let {info, date, query:{from, to, amount}, result} = data;
            // document.querySelector("#result").value = `As per the exchange rate ${info.rate.toFixed(2)} as on ${date} : ${from} ${amount.toFixed(2)} = ${to} ${result.toFixed(2)}`
            document.querySelector("#result").value = `${from} ${amount} = ${to} ${result.toFixed(2)} `;
        })
        .catch(error => console.log(error()))
    })
})