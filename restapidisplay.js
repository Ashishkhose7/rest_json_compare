//Q.2 Use REST country api to display all country flags


let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()


xhr.onload=function(){
    console.log("Connected...")
    let data=JSON.parse(xhr.responseText)

    for (const i of data) {
        console.log(`${i.flags.png}`)
    }
    
   
}
