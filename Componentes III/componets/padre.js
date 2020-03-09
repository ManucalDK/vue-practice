Vue.component('padre', {
    template: /*html*/
        `
            <div class="p-5 bg-dark text-white">
                <h1>Saludo Estatico - {{Saludo}}</h1>
                <h2>{{ numeroPadre }}</h2>
                <button @click="numeroPadre++" class="btn btn-danger">+</button>
                {{nombrePadre}}
                <hijo
                    :numero="numeroPadre"
                    @nombreHijo="nombrePadre = $event"
                ></hijo>
            </div>
        `,
    data(){
        return {
            Saludo : 'Saludo desde el padre',
            numeroPadre : 0,
            nombrePadre : '',
        }
    }
});