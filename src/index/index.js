import what from '../images/what.gif';
import what1 from '../images/what1.gif';
import what2 from '../images/what2.gif';
import what3 from '../images/what3.gif';
import {createCard} from "../util/cad";
import {createNav} from "../util/nav";
import './index.scss'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

// adding navbar
const nav = createNav();
document.getElementById("nav-index").appendChild(nav);

const card = createCard();
document.getElementById("card-extra").appendChild(card);
// adding image to carrousel

const img1 = document.getElementById("img1");
img1.src = what;

const img2 = document.getElementById("img2");
img2.src = what1;

const img3 = document.getElementById("img3");
img3.src = what2;

const img4 = document.getElementById("img4");
img4.src = what3;
