<template>
    <button @click="customClick">
        {{info}}
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: ['info'],
    methods:{
        customClick(){
            this.$emit('customClick')
        }
    }
}
</script>

<style scoped>
    button{
       padding: 5px;
       background: #ffffff;
       color: #41B883;
       font-size: 1.2rem;
       box-sizing: border-box;
    }
    button:hover{
        background: #41B883;
        color: #ffffff;
    }

    button:active{
        transform: scale(0.9, 0.9);
    }
</style>