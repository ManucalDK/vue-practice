Vue.component('saludo', {
    template:
        `
            <div>
                <h1>Saludo Estatico - {{Saludo}}</h1>
                <h3> Uso de plantillas desde el componente </h3>
            </div>
        `,
    data(){
        return {
            Saludo : 'Saludo desde el componente',
        }
    }
});

new Vue({
    el:'#app',
});
