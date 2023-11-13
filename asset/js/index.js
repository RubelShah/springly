const humburgerIcon = document.querySelector('#humburger-icon');
const offcanvasClose = document.querySelector('#offcanvas-close');
const offcanvasBody = document.querySelector('.off-canvas-body');
const offcanvasWrapper = document.querySelector('.off-canvas-wrapper');

humburgerIcon.addEventListener('click',()=>{
    offcanvasBody.classList.add('show');
    offcanvasWrapper.classList.add('show');
});

offcanvasClose.addEventListener('click',()=>{
    offcanvasBody.classList.remove('show');
    offcanvasWrapper.classList.remove('show');
});

window.addEventListener('click',(e)=>{
    if(e.target === offcanvasWrapper){
        offcanvasBody.classList.remove('show');
        offcanvasWrapper.classList.remove('show');
    }
});

/***************menu-inner-accordion*************/

const mccordionList = document.querySelectorAll('.m-nav-list li');
const navaccorul = document.querySelector('.nav-accor_ul');

mccordionList.forEach((item)=>{
    item.addEventListener('click', function(){
        console.log(item)
        for(element of mccordionList){
            if(element !=item){
                element.classList.remove('active');
            }else{
                this.classList.toggle('active');
            }
        }
    })
})