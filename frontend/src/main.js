import { createApp } from "vue";
import App from "@/App.vue";

const app = createApp(App);
app.mount('#app');
/*
const app = createApp({
    data(){
        return 
        {
            name : "Pervin"
        };
    },
    template: '<h1> Benim adım Pervin {{name}} </h1>',
});
app.mount("#app")
*/