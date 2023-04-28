import { getRecipe } from "./Modules/API.js";

const Home_Card = document.querySelector('.Home');
const interactive_card = document.querySelector('.interactive-card');

const Home_Button = document.querySelector('.enable-recipe-button');
const redirect_btn = document.querySelector('.redirect-btn');
const refresh_btn = document.querySelector('.refresh-recipe-btn');

const recipe_name = document.querySelector('.recipe-name');
const recipe_img = document.querySelector('.recipe-image');

function showRecipe(element,){
    element.addEventListener('click', async() => {
        let data = await getRecipe();

        console.log(data.recipes);

        /* styles changes */
        Home_Card.style.display = 'none';
        interactive_card.style.opacity = 1;
        interactive_card.style.height = 'auto';

        /* buttons changes */
        refreshRecipe(refresh_btn);
        redirect_btn.href = data.recipes[0].sourceUrl;

        /* others */
        recipe_img.src = data.recipes[0].image;
        recipe_name.innerHTML = data.recipes[0].title;
    })
}

function refreshRecipe (element) {
    element.addEventListener('click', async() => {
        let data = await getRecipe();

        redirect_btn.href = data.recipes[0].sourceUrl;

        recipe_img.src = data.recipes[0].image;
        recipe_name.innerHTML = data.recipes[0].title;
    })
}

showRecipe(Home_Button);