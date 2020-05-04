new Vue({
    el:'#vue-app',
    data:{
        vie: 100,
        finDeVie: false,
    },
    methods:{
        frappe: function() {
            ///il prend -10 dans la vie qui vaut 100
            console.log("coucou")
            this.vie -=10;
            if(this.vie <= 0){
                finDeVie = true;
            }
        },
        recommencer: function() {
            this.vie = 100;
            this.finDeVie = false;
        }
    },
    computed:{

    }
})