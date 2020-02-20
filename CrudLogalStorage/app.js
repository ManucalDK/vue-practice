const app = new Vue({
    el: "#app",
    data: {
        titulo : "GYM - VUE / Local Storage",
        tareas: [],
        nuevaTarea : '',
    },
    created:function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));

        if(datosDB === null){
            this.tareas = [];
        }
        else{
            this.tareas = datosDB;
        }
    },
    methods: {
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        cambiarEstado : function(indice){
            this.tareas[indice].estado = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        },
        eliminarTarea : function(indice){
            this.tareas.splice(indice, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    computed:{

    }
})