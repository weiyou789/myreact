/**
 * Created by root on 2017/7/12.
 */
import axios from 'axios'
import { Toast,Modal } from 'antd-mobile'
//import messdialog from './messdialog'
/*let test = messdialog.reWrite({msg:'wweowrwerwr'})
setTimeout(()=>{
  test.hide()
},3000)*/

/*import React from 'react'
import ReactDOM from 'react-dom'
let c = React.createElement('div',{className:'test'},'sfdsfsfsfsdfsdfsf')
let div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(c,div)*/

axios.interceptors.request.use(
    config => {
        let reg = new RegExp("(cms|st)\.(baidu|cekid)")
        reg.test(config.url)?config.withCredentials=false:config.withCredentials=true;
        Toast.info('正在加载！')
        return config;
    }, (error) => {
        Toast.hide()
        console.error(' request error', error, error && error.request)
        return Promise.reject(error)
    })

axios.interceptors.response.use((response) => {
    //console.log(response)
    Toast.hide()
    if (response.data.code == 0 || response.data.start == 0) {
        if(response.data.content){
            return Promise.resolve(response.data.content)
        }else if(response.data.data){
            return Promise.resolve(response.data.data)
        }
    }
    else if(response.data.code == 1001){
        return Promise.resolve(response.data.data)
    }
    else if (response.data.code == 1024) { // token expired
        window.location.href = '?cmd=login'
        return
    } else {
        Modal.alert(response.data.msg)
        return
    }
}, (error) => {
    Toast.hide()
    console.error(' response error', error, error && error.response)
        Modal.alert('网络错误')
        return Promise.reject(error)
})

export default axios
