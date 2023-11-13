
const selectField = document.querySelector('.select-field');
const selectList = document.querySelector('.select-list');
const selectLi = document.querySelectorAll('.select-list li');
const slelectText = document.querySelector('.slelect-text>div');

selectField.addEventListener('click',()=>{
    selectList.classList.toggle('hide');
});

selectLi.forEach(function(item){
    item.addEventListener('click',function(){
        slelectText.innerHTML =this.innerHTML;
        selectList.classList.add('hide');
    });
});