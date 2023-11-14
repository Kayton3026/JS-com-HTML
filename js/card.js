import { Card } from "./card.js";
import { NavBar } from "./navBar.js";

const  navBar = new NavBar()
const card = new Card()
navBar.NavBar()
//card.criaCard()

const produtos = [
    {nome: 'pizza de queijo',
    texto: 'melhor pizza',
    imagem: 'https://www.nestleprofessional.com.br/sites/default/files/styles/np_recipe_detail/public/2022-06/pizza.png?itok=MnrEvg8A'
}
]
produtos.forEach(produtos => {
    card.criaCard(produtos.imagem, produtos.nome, produtos.texto)
});