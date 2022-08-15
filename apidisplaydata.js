//Q.3 Use REST country api to display name,region,subregion,population

let api=new XMLHttpRequest()
api.open("GET","https://restcountries.com/v3.1/all")
api.send()


api.onload=function(){
    console.log("Connected...")
    let details=JSON.parse(api.responseText)
    for (const i of details) {
        console.log(`
        Country name: ${i.name.common}
        Region: ${i.region}
        Sub-region: ${i.subregion}
        Population: ${i.population}`)
    }

}