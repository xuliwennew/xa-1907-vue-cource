import {BASEURL} from "../commons/Config"

const CARTURL = `${BASEURL}/api/cartinfo`

export default {

    /**
     * 获取店铺的信息
     */
    getCartInfoByUserId(cb){
        fetch(CARTURL).then(res=>{
            res.json().then(cb)
        })
    }


}
