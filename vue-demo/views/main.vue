<template>
    <div>
        <hello class="xx"></hello>
        <world></world>
    </div>
</template>

<script>
    import shopApi from "../apis/shopApi"
    import hello from "../components/hello"
    import world from "../components/world"
    export default {
        name: "vmain",
        components:{
            hello,
            world
        },
        data(){
            return {
                shopInfo:[]
            }
        },
        methods:{
            /**
             * 初始化页面的数据
             * @private
             */
            _initPageData(){
                shopApi.getShopInfo(data=>{
                    this.shopInfo = data;
                    console.log(data)
                })
            }
        },
        created(){
           this._initPageData()
        },
        beforeMount(){

        },
        mounted(){

        }
    }
</script>

<style scoped>
    @import "../assets/css/main/main.css";
</style>
