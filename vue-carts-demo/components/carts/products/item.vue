<template>
    <li>
        <div class="shop-info">
            <input type="checkbox"
                   v-model="data.checked"
                   @change="pSelected(sid)"
                   class="check goods-check goodsCheck"/>
            <div class="shop-info-img">
                <a href="#">
                    <img :src="data.pic"/>
                </a>
            </div>
            <div class="shop-info-text">
                <h4>
                    {{data.title}}
                </h4>
                <div class="shop-brief">
                    <span>重量:3.3kg | true</span>
                    <span>颜色:标配版</span>
                    <span>版本:13.3英寸</span>
                </div>
                <div class="shop-price">
                    <div class="shop-pices">
                        ￥<b class="price">{{data.price}}</b>
                    </div>
                    <div class="shop-arithmetic">
                        <a class="minus" @click.prevent="addNum(sid,pid,'minus')">-</a>
                        <span class="num">{{data.num}}</span>
                        <a class="plus" @click.prevent="addNum(sid,pid,'add')">+</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        name: "item",
        props:["data","pid","sid"],
        methods:{
            pSelected(sid){
                this.$emit("pAll",sid)
            },
            addNum(sid,pid,flag){
                this.$bus.$emit("num",sid,pid,flag)
            }
        }
    }
</script>

<style scoped>

</style>
