<template>
    <div>
        <jx-cart-header></jx-cart-header>
        <div class="shopping">
           <jx-cart-shop :data="shop" :sid="sid" v-if="cartInfo.shops" v-for="(shop,sid) in cartInfo.shops"></jx-cart-shop>
        </div>
        <jx-cart-footer @sAll="shopSelectAll" v-if="cartInfo.shops"  :data="cartInfo"></jx-cart-footer>
    </div>
</template>

<script>
    import cartApi from "../apis/cartApi"
    import header from "../components/carts/header"
    import footer from "../components/carts/footer"
    import shop from "../components/carts/shop"

    export default {
        name: "cart",
        components:{
            "jx-cart-header":header,
            "jx-cart-footer":footer,
            "jx-cart-shop":shop
        },
        data(){
          return {
              cartInfo:[]  //页面的数据模型
          }
        },
        methods:{
            _initPageData(){
                cartApi.getCartInfoByUserId(data=>{
                    console.log(data)
                    this.cartInfo= data;
                })
            },
            shopSelectAll(){
                let checked = this.cartInfo.checked;
                console.log(checked)
                this.cartInfo.shops.forEach((shop,sid)=>{
                    shop.checked = checked
                    shop.products.forEach((product,pid)=>{
                        product.checked = checked;
                    })
                })
            }
        },
        created(){
            this._initPageData()
        }
    }
</script>

<style scoped>
  @import "../assets/carts.css";
</style>
