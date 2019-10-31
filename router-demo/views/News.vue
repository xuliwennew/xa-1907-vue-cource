<template>
    <div>
        <h1>新闻的列表</h1>
        <ul>
            <li v-for="(n,index) in list">
                <!--<a :href="'#/detail?id='+index">{{n.title}}</a>-->
                <!--<a :href="'#/detail/'+index">{{n.title}}</a>-->
                <!--<router-link  :to="{path:'detail',query:{id:index}}">{{n.title}}</router-link>-->
                <router-link :to="{name:'d',params:{id:index}}">{{n.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return {
                list:[
                    {title:"商务部新闻发言人：双方牵头人将于本周五再次通话",desc:"商务部新闻发言人：双方牵头人将于本周五再次通话"},
                    {title:"白宫说仍期待11月与中方敲定第一阶段贸易协议",desc:"白宫说仍期待11月与中方敲定第一阶段贸易协议"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
