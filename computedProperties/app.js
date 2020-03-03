const app = new Vue({
    el: '#app',
    data:{
          mensaje : 'Hola Mensaje',
          contador : 0,
        },
    computed: {
        textoInevrtido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-succes' : this.contador<=10,
                'bg-warning' : this.contador>10 && this.contador < 60,
                'bg-danger': this.contador >= 60
            };
        }
    },
})