<template>
  <div class="hello">
    <div class="center">
      
      
      <div class>
          <h3>Saved Tasks</h3>
          <ul>
            <div class="task-list">

              <li v-for="(task, index) in tasks" :key="index">
                <div class="action-icons">
                  <p v-bind:id="task.id" @click="delete_task">Delete</p>
                </div>
                <p>Task name: {{task.name}}</p>
                <p>Description: {{task.description}}</p>
                <p><input type="checkbox" v-model="task.remind_me" :checked="task.remind_me" /><label for="reminder">Set Reminder</label></p>
              </li>

            </div>
          </ul> 
      </div>

    </div> 

    <div class="right">
      <div class="right-container">
        <div class = "reminders">
          <h3>Reminders</h3>
          <ul>
            <div class="reminders-list">
              <li v-for="(task, index) in tasks" :key="index">
                <p v-show="task.remind_me"><span class="circle-span"></span>{{task.name}}</p>
              </li>
            </div>
          </ul> 
      </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      

    }
},
methods: {
    add(e){
      e.preventDefault();
      this.tasks.push({id: this.tasks.length+1, name: this.task_name, description: this.task_description, remind_me: this.remind_me})
      console.log(this.tasks)
      alert('Task \'' + this.task_name + '\' Added!')
    },
    delete_task(e){
      // if(confirm("Are You sure")){}s
      console.log(e.target.id)
      this.tasks = this.tasks.filter((t) => { return t.id != e.target.id })
    },
    set_reminder(e){
      // console.log(e.target.getAttribute("data-id"))
      let t = this.tasks.find(task => task.id = e.target.id)
      t['remind_me'] = !t['remind_me']
      console.log(t)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.hello{
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-gap: 10px;
}
.label-div{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 35%;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.task-list{
  display: flex;
  flex-direction:column;

}
.task-list >li{
    box-sizing: border-box;
    padding-left: 30%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    margin-bottom: 3px;
    border-bottom: 2px solid greenyellow;
    position: relative;
}


.task-list > li >p{
  align-self: flex-start;
}
.form-entry{
  display: flex;
  align-items: center ;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5px;
}
.reminders-list > li > p{
  display: flex;
  align-items: center;
}
.reminders-list > li{
    width: 100%;
    justify-content: flex-start;
    display: flex;
    box-sizing: border-box;
    padding-left: 15%;
}

</style>
