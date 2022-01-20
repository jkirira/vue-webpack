<template>
    <div class="task">
        <div class="action-buttons">
            <span class="action" @click="emitDeleteTask">delete</span>
        </div>

        <div class="task-header">

            <div class="task-name">
                <slot name="task-name"></slot>
            </div>

        </div>

        <div class="task-description">
            <slot name="task-description"></slot>
        </div>

        <div class="task-description">{{ task.date }}</div>
        <div class="task-buttons">
            <custom-button info="Set Reminder" @customClick="emitSetReminder"></custom-button>
            <custom-button info="Remove Reminder" @customClick="emitForgetReminder"></custom-button>
        </div>
    </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
   name: "Task",
   props: ['task'],
   data() {
       return {
           description: 'loremsd'
       }
   },
   components: {
       CustomButton,
   },
   methods: {
       emitSetReminder(){
           this.$emit('setReminder', this.task.id);
       },
       emitForgetReminder(){
           this.$emit('forgetReminder', this.task.id);
       },
       emitDeleteTask(){
           this.$emit('deleteTask', this.task.id)
       },
       taskDetails(){
         //console.log(22)
         this.$router.push({name: 'task_details', params: {id:this.task.id}}).catch(()=>{})
       }
   }
}
</script>

<style>
.task{
    padding: 15px;
    border: 1px solid grey;
    box-sizing: border-box;
    position: relative;
    text-align: left;
    margin-top: 20px;
    border-radius: 5px;
}
.task-header{
    display: grid;
    grid-template-columns: 90% 10%;
    word-break: break-all;
    flex-wrap: wrap;
    font-weight: 800;

}

.task-description{
    display: flex;
    word-break: break-all;
    margin-top: 10px;
}

.task-buttons{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 50px;
    grid-gap: 10px;
    margin-top: 20px;
}

.action-buttons{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.action {
    background: #41B883;
    color: #ffffff;
    padding: 0 5px;
    cursor: pointer;
}
</style>