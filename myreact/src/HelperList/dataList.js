import facebookLogo from './../img/facebook-logo.png';
import githubLogo from './../img/github-logo2.jpg';
import githubLogoLight from './../img/github-logo.png';
import telegramLogo from './../img/telegram-logo.png';
import porten from './../img/porten.png';
import shoppingcart from './../img/shoppingCart.png';
import adventure from './../img/adventure.jpg';
import airborne from './../img/airborne.jpg';
import anchor from './../img/anchor.jpg';
import dermatologie from './../img/dermatologie.jpg';

let dataList = {

    projects: [
        {
            title: 'Porten',
            skills: 'JavaScript, HTML, CSS',
            img: porten,
            href: 'https://vitaliym.github.io/Porten/',
            gitLink: ''
        },
        
        {
            title: 'Shopping Cart',
            skills: 'JavaScript, HTML, CSS',
            img: shoppingcart,
            href: 'https://vitaliym.github.io/ShoppingCart/',
            gitLink: ''
        },
        
        {
            title: 'Dermatologie',
            skills: 'JavaScript, HTML, CSS',
            img: dermatologie,
            href: 'https://vitaliym.github.io/Dermatologie/',
            gitLink: ''
        },
                
        {
            title: 'Adventure',
            skills: 'JavaScript, HTML, CSS',
            img: adventure,
            href: 'https://vitalii.gitlab.io/adventure/',
            gitLink: ''
        },
        
        {
            title: 'Airborne',
            skills: 'JavaScript, HTML, CSS',
            img: airborne,
            href: 'https://vitaliym.github.io/Airborne/',
            gitLink: ''
        },
        
        {
            title: 'Anchor',
            skills: 'JavaScript, HTML, CSS',
            img: anchor,
            href: 'https://vitaliym.github.io/Anchor/',
            gitLink: ''
        }
        
    ],

    footer: [
        {
            imgsource: facebookLogo,
            alt: 'facebook'
        },
        
        {
            imgsource: githubLogo,
            imgsourceLight: githubLogoLight,
            alt: 'gitHub'
        },
        
        {
            imgsource: telegramLogo,
            alt: 'telegram'
        },
        
    ]


}

export {dataList};