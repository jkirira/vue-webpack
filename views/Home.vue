<template>
  <div class="container">

    <div>
      <button @click="currentTab('home')">Home</button>
      <button @click="currentTab('form')">Form</button>
    </div>

    <component v-bind:is="getCurrentTab"></component>
  </div>


</template>

<script>
import HomeComponent from "../components/HomeComponent";
import TaskFormComponent from "../components/TaskFormComponent";
  export default {
      name:'Index',
      components: {
        HomeComponent,
        TaskFormComponent
      },
      data(){
        return { currentTabComponent: 'home', }
      },
      beforeCreate() {
        alert('This the first life cycle event: Before Create.')
      },
      mounted() {
        alert(`The component has been created and rendered.`);
      },
      computed:{
         getCurrentTab(){
           if(this.currentTabComponent == 'home'){
            return HomeComponent;
           }
           return TaskFormComponent;
         }
      },
      methods: {
          currentTab(tab){
            this.currentTabComponent = tab
          }
      }
  }
</script>
<style scoped>
  .container{
    height: 100%
  }
</style>