import facebookLogo from './../img/facebook-logo.png';
import githubLogo from './../img/github-logo2.jpg';
import telegramLogo from './../img/telegram-logo.png';
import adventure from './../img/adventure.jpg';
import airborne from './../img/airborne.jpg';
import anchor from './../img/anchor.jpg';
import dermatologie from './../img/dermatologie.jpg';

let dataList = {

    projects: [
        {
            title: 'Adventure',
            skills: 'JavaScript, HTML, CSS',
            img: adventure,
            gitLink: ''
        },
        
        {
            title: 'Airborne',
            skills: 'JavaScript, HTML, CSS',
            img: airborne,
            gitLink: ''
        },
        
        {
            title: 'Anchor',
            skills: 'JavaScript, HTML, CSS',
            img: anchor,
            gitLink: ''
        },
        
        {
            title: 'Dermatologie',
            skills: 'JavaScript, HTML, CSS',
            img: dermatologie,
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
            alt: 'gitHub'
        },
        
        {
            imgsource: telegramLogo,
            alt: 'telegram'
        },
        
    ]


}

export {dataList};