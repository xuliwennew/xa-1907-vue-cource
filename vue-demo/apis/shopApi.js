import {BASEURL} from "../commons/Config"

const SHOPURL = `${BASEURL}/shops/info`

export default {

    /**
     * 获取店铺的信息
     */
    getShopInfo(cb){
        fetch(SHOPURL).then(res=>{
            res.json().then(cb)
        })
    }


}
