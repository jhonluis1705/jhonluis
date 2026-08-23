
document.addEventListener('DOMContentLoaded',()=>{
const btnTema = document.getelementById('toggletema');
const btn= document.getElementById('btnsaudacao');
  const ano= document.getElementById('anoAtual');
  if(ano) ano.textContent=new date().getFullYear();
  if(btnTema){btnTema.addEventListener('click',()=>{document.body.classlist.toggle('light-mode');
  btnTema.textContent=document.body.classlist.contains('light-mode')?'noite':'dia';
                                                   });
             }
  if(btn){btn.addEventListener('click',()=>{
    const hora= newDate().gethours();
    let msg=hora<12?'bom dia': hora<18?'boa tarde':'boa noite';
    alert(msg+'!obrigado por visitar meu portfolio!');
  });
         }
  
const form=document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      alert('mensagem enviada!em breve te respondo.');
      form.reset();});}});
