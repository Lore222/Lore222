

fetch('./annunci.json')
.then( response => response.json() )
.then( data =>{

 function setCategoryFilter(){

    let categories = Array.from(new Set(data.map( el => el.category)));

    let categoriesWrapper = document.querySelector('#categoriesWrapper');

    categories.forEach( category => {

        let div = document.createElement('div');

        div.classList.add('form-check');

        div.innerHTML = `
        
        <input class="form-check-input" type="radio" name="categories" id="${category}">

        <label class="form-check-label" for="${category}">
             ${category}
        </label>

        `

        categoriesWrapper.appendChild(div);

    })
 }

 setCategoryFilter();


 function truncateString(str){

    if (str.split(' ').length > 10){

        return str.split(' ')[0] + '...'

    } else {

        return str

    }


 }
 


 function showCards(array){

    let cardWrapper = document.querySelector('#cardWrapper');

    cardWrapper.innerHTML = '';

    array.forEach( (annuncio, i) => {


        let div = document.createElement('div');

        div.classList.add('card-annunci', 'my-3');

        div.innerHTML = `
        
        <div class="card-head">
        <img src="${annuncio.img}"class=img-fluid img-card-custom"</div>
        <p class="lead fw-bold">${truncateString(annuncio.name)}</p>
        <p class="lead">${annuncio.category}</p>
        <p class="lead"><em>${annuncio.price} euro</em> </p>
        
        
        `
        
        cardWrapper.appendChild(div);


    })

 }

    showCards(data);


    function filteredByCategory(){

        let radioFilters = document.querySelectorAll('.form-check-input')

        radioFilters.forEach( button => {

            button.addEventListener('click', () =>{

                if(button.id == 'All'){
                    showCards(data);
                } else {

                    let filtered = data.filter( el => el.category == button.id)

                    showCards(filtered);

                }

            })

        })

    }

    filteredByCategory();


    function priceRange(){

        let maxPrice = data.map( el => Number(el.price)).sort( (a, b) => a - b).pop();

        let priceInput = document.querySelector('#priceInput');
    
        priceInput.max = Math.ceil(maxPrice);  


        let priceValue = document.querySelector('#priceValue');

        priceInput.addEventListener('input', () =>{

            priceValue.innerHTML = `${priceInput.value} euro`;

        })

        }


    priceRange();


    function filteredByPrice(){

        let priceInput = document.querySelector('#priceInput');

        priceInput.addEventListener('input', () =>{

            let filtered = data.filter( el => Number(el.price) <= priceInput.value)

            showCards(filtered);
        })


    }

    filteredByPrice();

    function filteredByWord(){

        let wordInput = document.querySelector('#wordInput');

        wordInput.addEventListener('input' , () =>{

            let filtered = data.filter( el => el.name.toLowerCase().includes(wordInput.value.toLowerCase()));
            showCards(filtered);


        })

    }

    filteredByWord();
} )

// SWIPER

let swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  function satisfiedCustomer(){

    let satisfiedCustomer = document.querySelector('#satisfiedCustomer');
    
    let counter = 0;
    
    let interval = setInterval( () => {
    
        counter++
        satisfiedCustomer.innerHTML = counter;
      
    
    
        if( counter > 219){
            clearInterval(interval)
        }
        
     
    }, 300);
    
    }
    

    function counterProducts(){

        let products = document.querySelector('#products');
        
        let counter = 0;
        
        let interval = setInterval( () => {
        
            counter++
            products.innerHTML = counter;
          
        
        
            if( counter > 429){
                clearInterval(interval)
            }
            
      
        }, 38);
        
        }

// back to the top button

        //Get the button:
        mybutton = document.getElementById("myBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        } 


//Codice per accettazione cookie - Inizio
        (function(window) {
            if (!!window.cookieChoices) {
              return window.cookieChoices;
            }
            let document = window.document;
            let supportsTextContent = 'textContent' in document.body;
            let cookieChoices = (function() {
              let cookieName = 'displayCookieConsent';
              let cookieConsentId = 'cookieChoiceInfo';
              let dismissLinkId = 'cookieChoiceDismiss';
              function _createHeaderElement(cookieText, dismissText, linkText, linkHref) {
                let butterBarStyles = 'position:bottom;width:100%;background-color:#eee;' +
                    'margin:0; left:0; top:0;padding:4px;z-index:1000;text-align:center;';
                let cookieConsentElement = document.createElement('div');
                cookieConsentElement.id = cookieConsentId;
                cookieConsentElement.style.cssText = butterBarStyles;
                cookieConsentElement.appendChild(_createConsentText(cookieText));
                if (!!linkText && !!linkHref) {
                  cookieConsentElement.appendChild(_createInformationLink(linkText, linkHref));
                }
                cookieConsentElement.appendChild(_createDismissLink(dismissText));
                return cookieConsentElement;
              }
              function _createDialogElement(cookieText, dismissText, linkText, linkHref) {
                let glassStyle = 'position:bottom;width:100%;height:100%;z-index:999;' +
                    'top:0;left:0;opacity:0.5;filter:alpha(opacity=50);' +
                    'background-color:#ccc;';
                let dialogStyle = 'z-index:1000;position:bottom;left:50%;top:50%';
                let contentStyle = 'position:relative;left:-50%;margin-top:-25%;' +
                    'background-color:#fff;padding:20px;box-shadow:4px 4px 25px #888;';
                let cookieConsentElement = document.createElement('div');
                cookieConsentElement.id = cookieConsentId;
                let glassPanel = document.createElement('div');
                glassPanel.style.cssText = glassStyle;
                let content = document.createElement('div');
                content.style.cssText = contentStyle;
                let dialog = document.createElement('div');
                dialog.style.cssText = dialogStyle;
                let dismissLink = _createDismissLink(dismissText);
                dismissLink.style.display = 'block';
                dismissLink.style.textAlign = 'right';
                dismissLink.style.marginTop = '8px';
                content.appendChild(_createConsentText(cookieText));
                if (!!linkText && !!linkHref) {
                  content.appendChild(_createInformationLink(linkText, linkHref));
                }
                content.appendChild(dismissLink);
                dialog.appendChild(content);
                cookieConsentElement.appendChild(glassPanel);
                cookieConsentElement.appendChild(dialog);
                return cookieConsentElement;
              }
              function _setElementText(element, text) {
                if (supportsTextContent) {
                  element.textContent = text;
                } else {
                  element.innerText = text;
                }
              }
              function _createConsentText(cookieText) {
                let consentText = document.createElement('span');
                _setElementText(consentText, cookieText);
                return consentText;
              }
              function _createDismissLink(dismissText) {
                let dismissLink = document.createElement('a');
                _setElementText(dismissLink, dismissText);
                dismissLink.id = dismissLinkId;
                dismissLink.href = '#';
                dismissLink.style.marginLeft = '24px';
                return dismissLink;
              }
              function _createInformationLink(linkText, linkHref) {
                let infoLink = document.createElement('a');
                _setElementText(infoLink, linkText);
                infoLink.href = linkHref;
                infoLink.target = '_blank';
                infoLink.style.marginLeft = '8px';
                return infoLink;
              }
              function _dismissLinkClick() {
                _saveUserPreference();
                _removeCookieConsent();
                return false;
              }
              function _showCookieConsent(cookieText, dismissText, linkText, linkHref, isDialog) {
                if (_shouldDisplayConsent()) {
                  _removeCookieConsent();
                  let consentElement = (isDialog) ?
                      _createDialogElement(cookieText, dismissText, linkText, linkHref) :
                      _createHeaderElement(cookieText, dismissText, linkText, linkHref);
                  let fragment = document.createDocumentFragment();
                  fragment.appendChild(consentElement);
                  document.body.appendChild(fragment.cloneNode(true));
                  document.getElementById(dismissLinkId).onclick = _dismissLinkClick;
                }
              }
              function showCookieConsentBar(cookieText, dismissText, linkText, linkHref) {
                _showCookieConsent(cookieText, dismissText, linkText, linkHref, false);
              }
              function showCookieConsentDialog(cookieText, dismissText, linkText, linkHref) {
                _showCookieConsent(cookieText, dismissText, linkText, linkHref, true);
              }
              function _removeCookieConsent() {
                let cookieChoiceElement = document.getElementById(cookieConsentId);
                if (cookieChoiceElement != null) {
                  cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
                }
              }
              function _saveUserPreference() {
          // Durata del cookie di un anno
                let expiryDate = new Date();
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
                document.cookie = cookieName + '=y; expires=' + expiryDate.toGMTString();
              }
              function _shouldDisplayConsent() {
                // Per mostrare il banner solo in mancanza del cookie
                return !document.cookie.match(new RegExp(cookieName + '=([^;]+)'));
              }
              let exports = {};
              exports.showCookieConsentBar = showCookieConsentBar;
              exports.showCookieConsentDialog = showCookieConsentDialog;
              return exports;
            })();
            window.cookieChoices = cookieChoices;
            return cookieChoices;
          })(this);
          document.addEventListener('DOMContentLoaded', function(event) {
              cookieChoices.showCookieConsentBar('Questo sito utilizza i cookie per migliorare servizi ed esperienza dei lettori. Se decidi di continuare la navigazione consideriamo che accetti il loro uso.',
                  'OK', '+Info', './presto.html');
            });
          //]]>
          //  <!-- Codice per accettazione cookie - Fine -->  