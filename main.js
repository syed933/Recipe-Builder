const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
const APP_ID = '5ab4707b';
const APP_key = '73263b1090f9ef887c11eac5b9ed7d88';


let searchQuery ='';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;
    const response = await fetch(baseURL);
    const data = await response.json()
    console.log(data);
}