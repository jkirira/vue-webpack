<template>
  <div>
    <button v-for="tab in tabs", v-bind:key="tab", v-bind:class="['tab-button', { active: currentTab === tab }]", v-on:click="currentTab = tab">
      {{tabs}}
    </button>

    <component v-bind:is="currentTabComponent"></component>
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
        return {
                  currentTab: HomeComponent,
                  tabs: [HomeComponent, FormComponent]
                }
        }
  }
</script>
<style>
</style>