'use strict';

var app = new Vue({
    el: '#v-app',
    data:{
        item: '',
        // id: Number(),
        listItem:[],
        showItem: true
    },
    methods:{
        addListItem: function(){
            this.item == '' ? alert('Друг, укажи задачу :)') : app.listItem.push({description : this.item, complite: false, id: app.listItem.length});
            this.item = '';
        },
        deleteListItem: function(id){
            app.listItem.splice(id, 1);
        },
        completeTask: function(id, complite){
            app.listItem[id].complite = !complite;
            // let check = document.getElementById('_check').checked = !complite;
        }
    }
})
