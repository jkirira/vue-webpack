<template>
    <div class="form-wrapper">    
        <form>

            <div class="form-entry">
            <div class="label-div">
                <label for="name">Task Name</label>
            </div>
            <div class="label-div">
                <input type="text" id="name" v-model="local_task_name" >
            </div>
            </div>

            <div class="form-entry">
            <div class="label-div">
                <label for="description">Task Description</label>
            </div>
            <div class="label-div">
                <textarea id="description" v-model="local_task_description"></textarea>
            </div>
            </div>

            <div class="form-entry">
            <div class="label-div">
                <label for="date">Date: </label>
            </div>
            <div class="label-div">
                <input type="date" id="task_date" v-model="local_task_date"  />
            </div>
            </div>
            
            
            <div class="form-entry">
            <div class="label-div">
                <div><input type="checkbox" id="reminder" v-model="local_remind_me" />Set Reminder</div>
            </div>
            </div>

        </form>
        
        <div class="form-entry">
            <custom-button info="Add Task" v-on:customClick="emitAddTask" ></custom-button>
        </div>
    
    </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
    name: "TaskForm",
    components: {
        CustomButton,
    },
    data(){
        return {
            local_task_name: '',
            local_task_description: '',
            local_task_date: '',
            local_remind_me: false,
        }
    },
    methods: {
        emitAddTask(){
            let task_data = { name: this.local_task_name, description: this.local_task_description, date: this.local_task_date, remind_me: this.local_remind_me}
            console.log(task_data)
            this.$emit('add_task', task_data)
            // console.log(this.data)
        }
    }
}
</script>

<style scoped>
form{
    padding: 10px 0px;
    box-sizing: border-box;
}
.form-wrapper{
    border: 2px solid grey;
    box-sizing: border-box;
}
.form-entry{
    text-align: left;
    box-sizing: border-box;
    padding: 10px 15% 10px;
}
input, textarea{
    font-size: 1.3rem;
    width: 100%;
    box-sizing: border-box;
}

#reminder{
    accent-color: #41B883;
    color: white;
    margin-right: 10px;
    width: unset;
}
</style>