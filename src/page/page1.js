
import {createCard} from "../util/cad";
import {createNav} from "../util/nav";
import './page1.scss'

const nav = createNav();
document.getElementById('nav-page1').appendChild(nav);
const card = createCard();
document.getElementById('container-page1').appendChild(card);
