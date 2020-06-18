//declarar variales para vincular los objetos del formulario
const usuario=  document.getElementById('user');
const password= document.getElementById('pass');
const formulario= document.getElementById('formLogin');


//generando eventos 
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    let usuarioVal= usuario.value;
    let passwordVal= password.value;

    if(usuarioVal ='' || passwordVal=''){
        return;
    }
    console.log('se muestra el valor user '+ usuarioVal);
    console.log('se muestra el valor password '+ passwordVal);
}