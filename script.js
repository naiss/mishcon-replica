//----- Función para mover la barra navegación al hacer scroll

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('nav1');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (window.matchMedia('(max-width: 992px)').matches) {
    if (scrollTop > 0) {
      navbar.style.top = '0px';
    } else {
      navbar.style.top = '0px';
    }
  } else {
    if (scrollTop > 0) {
      navbar.style.top = '0px';
    } else {
      navbar.style.top = '40px';
    }
  }
});


//----- Desplegable Menú Nav1 Responsive

// Obtén una referencia al botón de abrir el menú, al botón de cerrar el menú y al menú desplegable
var btnAbrirMenu = document.getElementById('btnAbrirMenu');
var btnCerrarMenu = document.getElementById('btnCerrarMenu');
var menuDesplegable = document.getElementById('menuDesplegable');

// Agrega un evento de clic al botón de abrir el menú
btnAbrirMenu.addEventListener('click', function() {
  menuDesplegable.classList.add('activo');
});

// Agrega un evento de clic al botón de cerrar el menú
btnCerrarMenu.addEventListener('click', function() {
  menuDesplegable.classList.remove('activo');
});


//----- Desplegable Related Sites

// Obtener referencias a los elementos
var dropdownBtn = document.getElementById('dropdownBtn');
var dropdownContent = document.getElementById('dropdownContent');

// Agregar evento de mouseover al botón y al contenido del menú desplegable
dropdownBtn.addEventListener('mouseover', function () {
  dropdownContent.classList.add('show');
});

dropdownContent.addEventListener('mouseover', function () {
  dropdownContent.classList.add('show');
});

// Agregar evento de mouseout al botón y al contenido del menú desplegable
dropdownBtn.addEventListener('mouseout', function () {
  dropdownContent.classList.remove('show');
});

dropdownContent.addEventListener('mouseout', function (event) {
  // Verificar si el ratón se movió fuera del menú desplegable
  if (!dropdownContent.contains(event.relatedTarget)) {
    dropdownContent.classList.remove('show');
  }
});

//----- Cambiar imagen-texto según enlaces (Related Sites)

function changeContent(index) {
  const content = document.getElementById("leftContent");
  
  const images = [
    "images/3.jpg",
    "images/taylor.png",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/city2.png",
    "images/mdr.png"
  ];
  
  const titles = [
    "Karas So LLP",
    "Taylor Vinters",
    "MDR Brand Management",
    "MDR Mayfair",
    "MDR Lab",
    "MDRx",
    "MDR ONE",
    "MDR Research",
    "MDR Solutions I",
    "MDR Ventures"
  ];
  
  const texts = [
    "Karas So LLP's disputes and investigations practice focuses on high value, complex issues including those arising from corporate collapses, audit and other professional negligence, shareholder disputes and commercial fraud.",
    "Our training contracts are the foundation of our graduate schemes",
    "Working with some of the best and brightest individuals",
    "MDR Mayfair was created to provide private advisory services for a select group of families by bringing together a broad range of highly qualified professionals to seamlessly manage their affairs.",
    "Academy to help carve your career as a Mishcon de Reya lawyer",
    "We need creative thinkers who can revolutionise the way we work",
    "MDR ONE provides centralised global employment law support and data-led insights to multinational companies, putting in-house counsel in control of their global legal operations.",
    "We want you to grow our business by building and shaping your ow",
    "A programme open to early stage and growth technology start-ups, whose products or services are applicable to the legal industry.",
    "As a key member of the team your opinion counts"
  ];

  const dropdownImage = document.createElement("div");
  dropdownImage.classList.add("dropdownImage");
  
  const img = document.createElement("img");
  img.src = images[index];
  img.alt = "Imagen";
  img.classList.add("imageClass");
  
  dropdownImage.appendChild(img);

  const textContent = document.createElement("div");
  textContent.classList.add("textContent");
  
  const dropdownTitle = document.createElement("div");
  dropdownTitle.classList.add("dropdownTitle");
  
  const titleParagraph = document.createElement("p");
  titleParagraph.textContent = titles[index];
  
  dropdownTitle.appendChild(titleParagraph);

  const dropdownText = document.createElement("div");
  dropdownText.classList.add("dropdownText");
  
  const textParagraph = document.createElement("p");
  textParagraph.textContent = texts[index];
  
  dropdownText.appendChild(textParagraph);

  textContent.appendChild(dropdownTitle);
  textContent.appendChild(dropdownText);

  content.innerHTML = "";
  content.appendChild(dropdownImage);
  content.appendChild(textContent);
}

/* function changeContent(index) {
  var content = document.getElementById("leftContent");
  var images = ["images/3.jpg", "images/taylor.png", "images/4.jpg", "images/5.jpg",
    "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/city2.png", "images/mdr.png"
  ];
  var titles = ["Karas So LLP", "Taylor Vinters", "MDR Brand Management", "MDR Mayfair",
    "MDR Lab", "MDRx", "MDR ONE", "MDR Research", "MDR Solutions I", "MDR Ventures"
  ];
  var texts = ["Karas So LLP's disputes and investigations practice focuses on high value, complex issues including those arising from corporate collapses, audit and other professional negligence, shareholder disputes and commercial fraud.",
    "Our training contracts are the foundation of our graduate schemes",
    "Working with some of the best and brightest the brightest individuals",
    "MDR Mayfair was created to provide private advisory services for a select group of families by bringing together a broad range of highly qualified professionals to seamlessly manage their affairs.",
    "Academy to help carve your career as a Mishcon de Reya lawyer",
    "We need creative thinkers who can revolutionise the way we work",
    "MDR ONE provides centralised global employment law support and data-led insights to multinational companies, putting in-house counsel in control of their global legal operations.",
    "We want you to grow our business by building and shaping your ow",
    "A programme open to early stage and growth technology start-ups, whose products or services are applicable to the legal industry.",
    "As a key member of the team your opinion counts"
  ];


  // Cambiar el contenido según el índice proporcionado
  content.innerHTML = `
 <div class="dropdownImage">
   <img src="${images[index]}" alt="Imagen" class="imageClass">
 </div>
 <div class="textContent">
   <div class="dropdownTitle">
     <p>${titles[index]}</p>
   </div>
   <div class="dropdownText">
     <p>${texts[index]}</p>
   </div>
 </div>
`;
} */

//----- Desplegable SERVICES Nav1

// Obtener referencias a los elementos
var dropdownAbout2 = document.getElementById('dropdownContentAbout2');
var aboutLink2 = document.querySelector('.navigation .dropdown2');

// Función para mostrar el desplegable con un retraso
function showDropdown() {
  setTimeout(function() {
    dropdownAbout2.classList.add('show');
  }, 300); 
}

// Función para ocultar el desplegable con un retraso
function hideDropdown() {
  setTimeout(function() {
    dropdownAbout2.classList.remove('show');
  }, 300); 
}

// Agregar evento de mouseover al enlace y pseudoelemento "Services"
aboutLink2.addEventListener('mouseover', function() {
  showDropdown();
});

// Agregar evento de mouseout al enlace y pseudoelemento "Services"
aboutLink2.addEventListener('mouseout', function(event) {
  // Verificar si el ratón se movió fuera del desplegable
  if (!dropdownAbout2.contains(event.relatedTarget)) {
    hideDropdown();
  }
});

// Agregar evento de mouseover al desplegable "Services"
dropdownAbout2.addEventListener('mouseover', function() {
  showDropdown();
});

//----- Dispute Reolutions, Employement, Future, Private

function showDiv(container) {
  setTimeout(function() {
    container.style.display = 'block';
  }, 300);
}

function hideDiv(container) {
  setTimeout(function() {
    container.style.display = 'none';
  }, 300);
}


//----- Desplegable ABOUT US y PEOPLE Nav1

function addDropdownEvents(dropdownId, linkSelector) {
  var dropdown = document.getElementById(dropdownId);
  var link = document.querySelector(linkSelector);

  var showDropdown = function() {
    setTimeout(function() {
      dropdown.classList.add('show');
    }, 300);
  };

  var hideDropdown = function() {
    setTimeout(function() {
      dropdown.classList.remove('show');
    }, 300);
  };

  link.addEventListener('mouseover', showDropdown);
  link.addEventListener('mouseout', hideDropdown);
  dropdown.addEventListener('mouseover', showDropdown);
  dropdown.addEventListener('mouseout', hideDropdown);
}

addDropdownEvents('dropdownContentAbout', '.navigation li.dropdown');
addDropdownEvents('dropdownContentPeople', '.navigation li.dropdownPeople');



//----- Abrir enlaces html

document.getElementById("button_watch").addEventListener("click", function () {
  window.location.href = "climate.html";
});

document.getElementById("button_meet").addEventListener("click", function () {
  window.location.href = "people.html";
});

document.getElementById("button_find").addEventListener("click", function () {
  window.location.href = "karas.html";
});

//----- Elimina palabra 'News, de nav2

window.addEventListener('DOMContentLoaded', function() {
  var links = document.getElementsByClassName('nav-link');

  if (window.matchMedia('(max-width: 992px)').matches) {
    for (var i = 0; i < links.length; i++) {
      var linkText = links[i].textContent;
      linkText = linkText.replace(' News', '');
      links[i].textContent = linkText;
    }
  }
});
 

//----- Cambiar contenido Latest Gallery2

 function changeContentOrder(event, content_type, category) {
    event.preventDefault(); // Evita comportamiento predeterminado del enlace

    var mainImage = document.querySelector('.main-image');
    var remainingImages1 = document.querySelector('.remaining-images-1');
    var remainingImages2 = document.querySelector('.remaining-images-2');

    // Actualiza img y text
    if (content_type === 'firm-news') {
      mainImage.innerHTML = `
        <img src="images/people.png" alt="Nueva imagen 1">
        <div class="text">
        <h4>Breaking news</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.1</p>
        <span class="date">23 MAY 2023</span>
        </div>
        `;
      remainingImages1.innerHTML = `
        <div class="image">
        <img src="images/8.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">15 FEB 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/11.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">23 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/mdr.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">15 FEB 2023</span>
        </div>
        </div>  
        `;
      remainingImages2.innerHTML = ` <div class="image">
        <img src="images/taylor.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">23 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/7.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/city2.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>   
        `;

    } else if (content_type === 'our-work') {
      mainImage.innerHTML = `
        <img src="images/9.png" alt="Nueva imagen 1">
        <div class="text">
        <h4>Breaking news</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.1</p>
        <span class="date">15 FEB 2023</span>
        </div>
        `;
      remainingImages1.innerHTML = `
        <div class="image">
        <img src="images/6.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/man.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/taylor.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        `;
      remainingImages2.innerHTML = `
        <div class="image">
        <img src="images/15.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/16.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/14.jpeg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        `;
    } else if (content_type === 'business-news') {
      mainImage.innerHTML = `
        <img src="images/16.jpg" alt="Nueva imagen 1">
        <div class="text">
        <h4>Breaking news</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.1</p>
        <span class="date">15 FEB 2023</span>
        </div>
        `;
      remainingImages1.innerHTML = `
        <div class="image">
        <img src="images/3.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/4.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/mdr.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        `;
      remainingImages2.innerHTML = `
      <div class="image">
        <img src="images/16.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/woman.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/8.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>;`
    } else if (content_type === 'personal-news') {
      mainImage.innerHTML = `
        <img src="images/climate1.png" alt="Nueva imagen 1">
        <div class="text">
        <h4>Breaking news</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.1</p>
        <span class="date">15 FEB 2023</span>
        </div>
        `;
      remainingImages1.innerHTML = `
        <div class="image">
        <img src="images/people.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/people2.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/people3.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        `;
      remainingImages2.innerHTML = `
      <div class="image">
        <img src="images/4.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Events</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/3.jpg" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/mdr.png" alt="Nueva imagen 2">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et
        dolore magna aliqua.2</p>
        <span class="date">12 OCT 2023</span>
        </div>
        </div>;`
    } else if (content_type === 'all') {
      mainImage.innerHTML = `
        <img src="images/6.png" alt="Image 6">
        <div class="text">
        <h4>Article</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore
        et
        dolore magna aliqua. Ut enim ad minim veniaa. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
        <span class="date">3 MAY 2023</span>
        </div>
        `;
      remainingImages1.innerHTML = `
        <div class="image">
        <img src="images/7.png" alt="Image 7">
        <div class="text">
        <h4>Article</h4>
        <p> Descripción breve imagen 2 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/8.png" alt="Image 8">
        <div class="text">
        <h4>Events</h4>
        <p>Descripción breve imagen 3 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/9.png" alt="Image 9">
        <div class="text">
        <h4>Article</h4>
        <p>Descripción breve imagen 4 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>
        `;
      remainingImages2.innerHTML = `
        <div class="image">
        <img src="images/10.png" alt="Image 10">
        <div class="text">
        <h4>Article</h4>
        <p>Descripción breve imagen 5 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/11.png" alt="Image 11">
        <div class="text">
        <h4>Article</h4>
        <p>Descripción breve imagen 6 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>
        <div class="image">
        <img src="images/12.png" alt="Image 12">
        <div class="text">
        <h4>Article</h4>
        <p>Descripción breve imagen 7 Lorem ipsum dolor sit amet, consectetur adipiscing
        elit</p>
        <span class="date">3 MAY 2023</span>
        </div>
        </div>;`
    }



  // Comportamiento ratón en nav2. Remover la clase 'active' de todos los enlaces
   var navLinks = document.querySelectorAll('.nav2 .nav-link');
    navLinks.forEach(function(link) {
    link.classList.remove('active');
   });

  // Agregar la clase 'active' al enlace clicado
    event.target.classList.add('active');

    var allMenuRestore = document.getElementById('allMenu');
   
    //Verificar si hay algún elemento nulo
    if (checkElementNull(allMenuRestore)){
      allMenuRestore.setAttribute('id', '');
    }
  } 

function checkElementNull(element) {
  if (element) {
    return true;
  } else {
    return false;
  }
}

// //----- serviciosAdicionales

// // Obtener elementos necesarios
// var servicesElement = document.getElementById('services');
// var serviciosAdicionalesElement = document.getElementById('serviciosAdicionales');

// // Agregar evento de clic al elemento "Services"
// servicesElement.addEventListener('click', function() {
//     // Realizar deslizamiento hacia la izquierda
//     serviciosAdicionalesElement.style.transform = 'translateX(-100%)';
//     serviciosAdicionalesElement.style.display = 'block';
// });

