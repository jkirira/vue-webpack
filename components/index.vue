<template>
  <div>
    <button v-for="tab in tabs", v-bind:key="tab", v-bind:class="['tab-button', { active: currentTab === tab }]", v-on:click="currentTab = tab">
      {{tabs}}
    </button>
  </div>
  <component v-bind:is="currentTabComponent"></component>

</template>

<script>
import HomeComponent from "./HomeComponent";
import TaskFormComponent from "./TaskFormComponent";
  export default {
      name:'index',
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
