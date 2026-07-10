const BASE_URL =
"https://v6.exchangerate-api.com/v6/082f73d35e94ac3667538e22/pair";


let dropdowns= document.querySelectorAll(".currency-box select")
let btn=document.querySelector("#convertBtn")
let from=document.querySelector("#fromCurrency");
let to=document.querySelector("#toCurrency")
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.id==="fromCurrency" && currCode==="USD"){
            newOption.selected="selected";
        }else if(select.id=="toCurrency" && currCode=="INR"){
            newOption.selected="selected";
        }
       select.append(newOption);
    }
}

btn.addEventListener("click", async(evt)=>{
    
    let amount= document.querySelector("#amount")
    let amntVal=amount.value
    if(amntVal=="" || amntVal<1){
        amntVal="1"
    }
    const URL= `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`
    let response= await fetch(URL)
    let data=  await response.json()
    let rate= data[to.value.toLowerCase()]
    let result= amntVal*rate;
    let showresult=document.querySelector("#result")
    showresult.innerText= result;
})

