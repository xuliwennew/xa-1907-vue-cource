<template>
   <div>
       <h1>新闻的详情</h1>
       <h2>{{item.title}}</h2>
       <p>{{item.desc}}</p>

       <button @click="goUrl">导航到列表页面</button>
   </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return {
                list:[
                    {title:"商务部新闻发言人：双方牵头人将于本周五再次通话",desc:"商务部新闻发言人：双方牵头人将于本周五再次通话"},
                    {title:"白宫说仍期待11月与中方敲定第一阶段贸易协议",desc:"白宫说仍期待11月与中方敲定第一阶段贸易协议"}
                ],
                item:{}
            }
        },
        created(){
            console.log(this.$route) //:id
            // this.item = this.list[this.$route.query.id]
            this.item = this.list[this.$route.params.id]
        },
        beforeMount(){
            console.log(this.$route)
        },
        mounted(){
            console.log(this.$route)
        },
        methods:{
            goUrl(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
