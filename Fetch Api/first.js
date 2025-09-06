//free-apis.github.io/#/browse       <===Apis link

const URL = "https://reqres.in/api/users?page=2";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

/*
getFacts();
const getFacts = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
     console.log(response);
     let data = await response.json();
     factPara.innerText =data.text;
};
*/

//promise chaining
function getFacts (){
    fetch(URL)
     .then((response) =>{
        return response.json();
     })
    .then((data) =>{
        console.log(data);
        factPara.innerText =data.text;

    });
}
btn.addEventListener("click",getFacts);