<template>
   <div>
       <h1>{{n2}}</h1>
       <button @click="count">+</button>
   </div>
</template>

<script>
    import {watch, reactive, computed, toRefs ,onMounted ,onUpdated,onUnmounted} from '@vue/composition-api'
    export default {
        name: "App",
        setup () {
            const data = reactive({
                n:0,
                n2:computed(()=>{
                    return data.n *3
                })
            })

            var count = ()=> {
                data.n++
            }

            onMounted(()=>{
                console.log("onmounted")
            })

            onUpdated(()=>{
                console.log("onupdated")
            })

            onUnmounted(()=>{
                console.log("onunmounted")
            });

            return {
                ...toRefs(data),
                count
            }
        }
    }
</script>

<style scoped>

</style>
