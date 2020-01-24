const app = new Vue({
    el:'#app',
    data:{
        titulo: 'Hola Mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:23},
            {nombre:'Manzana', cantidad:4},
            {nombre:'Platano', cantidad:0}
        ],
        nuevaFruta: ''
    },
    methods:{
        agregarFruta (){
            console.log("agregaste una fruta");
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad : Math.floor(Math.random() * 10)
            })
        },
        otroMetodo(){

        }
    }
})