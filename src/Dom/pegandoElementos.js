/*  DOM = Document Object Model
o Documento e cada elemento html que formam os conteudos.x
Arvore com elementos desde o Browser, a Janela do Browser, 

navigator
    window
        location
            document -> html -> head e body
                history


      PARA MANIPULAR O DOM PRECISAMOS
     indicar qual objeto usar, depois
     chamar um método(função) para
     selecionar ele, seus dados, trazer informações, etc
     .querySelector() ou .querySelectorAll() para pegar todos os elementos.
*/

// DOCUMENT:
 document.querySelector('h1') // selecionar elemento com base na tag, #id ou .class
 document.querySelectorAll('h2') // seleciona todos os elementos.
 //Outros tipos de seletores:
    .getElementsByTagName()
    .getElementById()
    .getElementsByClassName()


 



document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
testando[0].textContent = 'texto qualquer'


