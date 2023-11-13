const waccorlist = document.querySelectorAll('.accor_list');
const waccorcontent = document.querySelectorAll('.accor_content');
const downUpcontent = document.querySelector('.accor_list.active .accor_content');

waccorlist.forEach((item)=>{
  item.addEventListener('click',function(){
    for(const element of waccorlist){
        if(element != item){
            element.classList.remove('active');
        }else{
            this.classList.toggle('active');
            // downUpcontent.style.height = downUpcontent.clientHeight
        }
    }
  });
});