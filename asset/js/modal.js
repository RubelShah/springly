// variables
let openbtn = document.getElementById('appoint-btn');
let modalContainer = document.getElementById('modal-container');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('close-btn');

//evenlistener
openbtn.addEventListener('click', function(){
    modalContainer.classList.add('show');
    modal.classList.add('active');
});
closeBtn.addEventListener('click', function(){
    modalContainer.classList.remove('show');
    modal.classList.remove('active');
    
    
});

window.addEventListener('click', function(e){
     if(e.target === modalContainer){
        modalContainer.classList.remove('show');
        modal.classList.remove('active');
     };   
});