<template>

    <div class="container">

      <div class="right">
        <h3>Reminders</h3>

        <router-view></router-view>

        <reminder-component v-for="(task, index) in toRemind" :key="index" v-bind:task="task"></reminder-component>

      </div>

  </div>
</template>

<script>
import store from "../src/store";
import ReminderComponent from '../components/ReminderComponent'

export default {
  name: 'Reminders',
  components: {
    ReminderComponent,
  },
  data(){
    return {
      tasks: store.tasks
    }
  },
  computed: {
    toRemind(){
      return this.tasks.filter((task) => task.remind_me === true)
    }
  },
  methods: {
    toggle_show: function(){
      this.show_toggle = !this.show_toggle
    },
    add(task_data){
      console.log(task_data)
      this.tasks.unshift({id: this.tasks.length+1, name: task_data.name, description: task_data.description, date: task_data.date, remind_me: task_data.remind_me})
      console.log(this.tasks)
      alert('Task \'' + task_data.name + '\' Added!')
    },
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

<style scoped>
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
.task-buttons{
  grid-template-columns: none;
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
    box-sizing: border-box;
    padding: 0px 10%;
  }
  button{
    font-size: 1.4rem;
  }
}
</style>
