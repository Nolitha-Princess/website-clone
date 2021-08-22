
// This is the top header to register and login as a user 
const header = document.createElement('div');
    header.classList.add('header');
    const user = document.createElement('ul');
    const login = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('line');
    const register = document.createElement('li');

    login.textContent = 'Login';
    register.textContent = 'Register';


    header.appendChild(user);
    user.appendChild(span);
    user.appendChild(login);
    user.appendChild(register);
    document.body.appendChild(header);

    // this is the navigation bar 

const menu = document.createElement('nav');
    const list = document.createElement('ul');
    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = 'images/octopus.png'; 
    const about = document.createElement('li');
    const explore = document.createElement('li');
    const news = document.createElement('li');
    const contact = document.createElement('li');
    list.classList.add('menuBar');

    about.textContent = 'About';
    explore.textContent = 'Explore';
    news.textContent = 'News';
    contact.textContent = 'Contact';
    

    list.appendChild(logo);
    list.appendChild(about);
    list.appendChild(explore);
    list.appendChild(news);
    list.appendChild(contact);
    menu.appendChild(list);
    document.body.appendChild(menu);



// The body 

const Background = document.querySelector('body');
const Div = document.createElement('div');
Div.classList.add('container');
const firstH = document.createElement('h1');
const words = document.createElement('h2')
const horizontal = document.createElement('HR');

firstH.textContent = 'DIVE CLUB';
words.textContent = 'EXPLORE THE WORLD';
Background.appendChild(Div);
Div.appendChild(firstH);
Div.appendChild(words);
Background.appendChild(horizontal);

const lorem = document.createElement('div');
lorem.classList.add('content');
lorem.textContent = 'The ocean is a huge body of saltwater that covers about 71 percent of Earth’s surface. The planet has one global ocean, though oceanographers and the countries of the world have traditionally divided it into four distinct regions: the Pacific, Atlantic, Indian, and Arctic oceans. Beginning in the 20th century, some oceanographers labeled the seas around Antarctica the Southern Ocean.'
Background.appendChild(lorem);



const secondH = document.createElement('h2');
secondH.classList.add('text');
secondH.textContent = "SEA CREATURES";

const smallWords = document.createElement('h3');
smallWords.classList.add("smallWords");
smallWords.textContent = "The ocean covers more than 70 percent of Earth, and more than 80 percent of it remains unexplored.";


Background.appendChild(secondH);
Background.appendChild(smallWords);


// the images in the flex

const thePictures = document.createElement('div');
thePictures.classList.add('pictures');

const firstPic = document.createElement('div');
const pic1 = document.createElement('img');
pic1.classList.add('picture');
pic1.src = 'images/Picture1.jpg';

const secondPic = document.createElement('div');
const pic2 = document.createElement('img');
pic2.classList.add('picture');
pic2.src = 'images/Picture2.jpg';

const thirdPic = document.createElement('div');
const pic3 = document.createElement('img');
pic3.classList.add('picture');
pic3.src = 'images/Picture3.png';


firstPic.appendChild(pic1);
secondPic.appendChild(pic2);
thirdPic.appendChild(pic3);
thePictures.appendChild(firstPic);
thePictures.appendChild(secondPic);
thePictures.appendChild(thirdPic);
Background.appendChild(thePictures);


/* the button */

const theButton = document.createElement('div');
theButton.classList.add('ButtonBackground')
const Btn = document.createElement('button');
Btn.textContent = 'UNDERWATER';

theButton.appendChild(Btn)
Background.appendChild(theButton);


    /* This is the footer with footer image */

    const footer = document.createElement('footer');
    const bottomDiv = document.createElement('div');
    const bottom = document.createElement('div')
    footer.classList.add('footerContent');
    
    bottom.textContent = '2017 Samuel Scalzo. All rights reserved';
    const bottomLogo = document.createElement('img');
    bottomLogo.classList.add('bottomPic');
    bottomLogo.src = 'images/octopus.png';
    
    footer.appendChild(bottomDiv);
    bottomDiv.appendChild(bottomLogo);
    footer.appendChild(bottom);
    Background.appendChild(footer);