<template>
    <div class="reminder">
        <div class="name"><span class="circle-span"></span>{{ task.name }}</div>
        <div class="date">Date: {{ task.date }}</div>
      <custom-button info="Details" @customClick="showDetails"></custom-button>
      <custom-button info="Hide" @customClick="hideDetails"></custom-button>
    </div>
</template>

<script>
import CustomButton from "./CustomButton";
export default {
    name: "ReminderComponent",
    props: ['task'],
    components: {
      CustomButton
    },
    methods: {
      showDetails(){
        this.$router.push({name: "reminder_details", params:{id:this.task.id}}).catch(()=>{})
      },
      hideDetails(){
        this.$router.push({name: "reminders"}).catch(()=>{})
      }
    }
}
</script>

<style>
.reminder{
    border: 2px solid grey;
    border-radius: 5px;
    word-break: break-all;
    box-sizing: border-box;
    padding: 20px 10px;
    margin-top: 10px;
}
.name{
    display: flex;
    box-sizing: border-box;
    align-items: center;
    margin-left: 20px;
    flex-wrap: wrap;
}
.date{
    display: flex;
    margin-left: 40px;
}

.circle-span{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  display: block;
  margin-right: 10px;
}
</style>





<keep-alive>
  <component v-bind:is="loggedIn" @alternate="changeForm"/>
</keep-alive>



