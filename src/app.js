import $ from 'jquery';
import Button from './ui/button.js';
import Image from './ui/image.js';

const btn = new Button("Voltar");
btn.getElementString();

const img = new Image("./images/drone.jpg");
img.getElementString();

img.appendToElement($('body'));
btn.appendToElement($('body'));