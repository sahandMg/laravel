

Vue.component('tasks',{

    template:'#task-temp',

    data:function () {
      return{

          list:[''],

      }
    },
    created:function () {

        vm = this

        // this.$http.get('tasks').then(function (response) {
        //
        //
        //
        //     vm.list = response.data
        //
        // })

        axios.get('tasks').then(function (response) {


            vm.list = response.data

        })

    }


});

new Vue({

    el:'#app',

    data:{

        list:['']
    }



});