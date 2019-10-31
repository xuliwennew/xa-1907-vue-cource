<template>

    <div v-if="cartInfo.shops">
        <jx-cart-header></jx-cart-header>
        <div class="shopping">
            <jx-cart-shop @pAll="productSelectAll" @sAll="sSelectAll" :data="shop" :sid="sid" v-if="cartInfo.shops"
                          v-for="(shop,sid) in cartInfo.shops"></jx-cart-shop>
        </div>
        <jx-cart-footer @cAll="shopSelectAll" v-if="cartInfo.shops" :data="cartInfo"></jx-cart-footer>
    </div>
    <jx-loading v-else></jx-loading>


</template>

<script>

    import loading from "../components/common/loading"
    import cartApi from "../apis/cartApi"
    import header from "../components/carts/header"
    import footer from "../components/carts/footer"
    import shop from "../components/carts/shop"

    export default {
        name: "cart",
        components: {
            "jx-cart-header": header,
            "jx-cart-footer": footer,
            "jx-cart-shop": shop,
            "jx-loading": loading
        },
        data() {
            return {
                flag:true,
                cartInfo: []  //页面的数据模型
            }
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            _initPageData() {
                cartApi.getCartInfoByUserId(data => {
                    console.log(data)
                    this.cartInfo = data;
                })
            },
            /**
             * 购物车全选返选
             */
            shopSelectAll() {
                let checked = this.cartInfo.checked;
                console.log(checked)
                this.cartInfo.shops.forEach((shop, sid) => {
                    shop.checked = checked
                    shop.products.forEach((product, pid) => {
                        product.checked = checked;
                    })
                })
            },
            /**
             * 单店铺的全选与返选
             */
            sSelectAll(sid) {
                let checked = this.cartInfo.shops[sid].checked;
                console.log(sid)
                this.cartInfo.shops[sid].products.forEach((product, pid) => {
                    product.checked = checked;
                })
            },
            /**
             * 单选状态的改变
             */
            productSelectAll(sid) {
                console.log(sid)
                let checked = this.cartInfo.shops[sid].products.every((product, pid, nArr) => {
                    return product.checked == true
                })

                this.cartInfo.shops[sid].checked = checked;

                let schecked = this.cartInfo.shops.every((shop,sid,nArr)=>{
                    console.log(shop.checked)
                    return shop.checked == true
                })


                this.cartInfo.checked = schecked
            },

            /**
             * 增加数量
             * @param sid
             * @param pid
             */
            updateNum(sid,pid,flag){
               console.log(sid,pid)
               if(flag == "add"){
                   this.cartInfo.shops[sid].products[pid].num++
               }else{

                   if( this.cartInfo.shops[sid].products[pid].num <=1){
                       this.cartInfo.shops[sid].products[pid].num =1
                   }else{
                       this.cartInfo.shops[sid].products[pid].num--
                   }
               }
            },
            /**
             * 统计cart总价格
             * @private
             */
            _countCartPrice(){
                let total = 0

                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.products.forEach((product,pid)=>{
                        if(product.checked){
                            total +=product.price * product.num
                        }
                    })
                })


                return total
            }
        },
        created() {
            this._initPageData()
        },
        mounted(){
            this.$bus.$on("num",this.updateNum)
        },
        watch:{
            cartInfo:{
                handler(n){
                  let total= this._countCartPrice()
                    console.log(total)
                   if(total >=8000 && this.flag){
                       this.flag = false
                       console.log("send 100 cent")
                   }
                },
                deep:true
            }
        }
    }
</script>

<style scoped>
    @import "../assets/carts.css";
</style>
