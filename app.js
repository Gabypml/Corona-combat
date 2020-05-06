new Vue({
    el:'#vue-app',
    data:{
        vie: 100,
        finDeVie: false,
        title: "Combattez-le"
    },
    methods:{
        frappe: function() {
            ///il prend -10 dans la vie qui vaut 100
            this.vie -=10;
            if(this.vie <= 0){
                this.finDeVie = true;
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