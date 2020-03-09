Vue.component('hijo', {
    template: /*html*/
        `
        <div class="p-3 mt-3 bg-light text-info">
            <h3>este es mi otro componente</h3>
            <h4>{{ numero }}</h4>
            <h4>Nombre: {{ nombre }}</h4>
        </div>
        `,
    props:['numero'],
    
    data(){
        return{
            nombre: 'Manuel',
        }
    },

    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
});