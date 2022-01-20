
<template>

    <div class="container">

        <div class="tasks-div">
          <h3>Saved Tasks</h3>

          <task-component v-for="(task, index) in tasks" :key="index" v-bind:task="task" @setReminder="remind" @forgetReminder="dontRemind" @deleteTask="delete_task" >

            <template #task-name>
              {{task.name}}
            </template>

            <template v-slot:task-description>
              {{task.description}}
            </template>

          </task-component>
        </div>

      </div>

</template>

<script>
import store from "../src/store";
import TaskComponent from '../components/TaskComponent.vue'

export default {
  name: 'Tasks',
  components: {
    TaskComponent,
  },
  data(){
    return {
      welcome_message: "Tasks",
      rawHTML: `<h5>Enter a task</h5>`,
      checked:[],
      tasks: store.tasks
    }
  },
  computed: {
    toRemind(){
      return this.tasks.filter((task) => task.remind_me == true)
    }
  },
  methods: {
    remind(target_id){
      let t = this.tasks.find(task => task.id == target_id)
      t['remind_me'] = true
      // console.log(t)
    },
    dontRemind(target_id){
      let t = this.tasks.find(task => task.id == target_id)
      t['remind_me'] = false
      // console.log(t)
    },
    delete_task(target_id){
      this.tasks = this.tasks.filter((task) => {return task.id != target_id})
    }
  }

}
</script>

<style>
html, body{
  font-size: 16px;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: scroll;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.header{
  background: #34495E;
  color: white;
  height:10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container{
  box-sizing: border-box;
  grid-gap: 20px;
  padding: 10px;
  font-size: 1.4rem;
}
.center, .right{
  width: 100%;

  border-radius: 5px;
  padding: 20px 10px;
  box-sizing: border-box;

}
.center{
  grid-column: 2;

  box-sizing: border-box;
}
.add-task-div{
  grid-row: 1;
  /* border: 2px solid grey; */
}
.tasks-div{
  grid-row: 2;
  /* border: 2px solid grey; */
  margin-bottom: 20px;

}
.right{
  grid-column: 1;
}

@media screen and (min-width: 350px) {
  .container{
    font-size: 1.5rem;
  }

}

@media screen and (min-width: 750px){
  .container{
    font-size: 2rem;
    box-sizing: border-box;
    padding: 0px 10%;
  }
  .task, form{
    padding: 25px;
  }
}

@media screen and (min-width: 1024px){
  .container{
    font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    box-sizing: border-box;
    padding: 0px 10%;
  }
  button{
    font-size: 1.4rem;
  }
}
</style>
