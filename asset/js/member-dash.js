const listA = document.querySelectorAll('.list-a');

const dashContents = document.querySelectorAll('.dash-content');

listA.forEach(btn=>{
    btn.addEventListener('click',function(){
        console.log(btn)
        const tabvalue = this.dataset.list;
        const targetId = document.getElementById(tabvalue);

        for(element of listA){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        this.classList.add('active');
        for(element of dashContents){
            if(element.classList.contains('active')){
                element.classList.remove('active');
            }
        }
        targetId.classList.add('active');
    })

    
})