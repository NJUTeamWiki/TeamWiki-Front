import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
import {message} from 'antd'
import $ from 'jquery'
export function uploadfile(data:any,cb) {
    // return fetch(`${serverIP}/knowledge/upload`, {
    //     method: 'POST',
    //     mode: "cors",
    //     credentials: 'include',
    //     headers: new Headers({
    //         'Content-Type':'application/x-www-form-urlencoded',
    //         'Access-Control-Allow-Origin': '*',
    //     }),
    //     body:data
        
    // }).then(res => res.json()).then((json) => {    
    //     if(json.code==20001){
    //         message.error("身份过期，请重新登录")
    //         window.location.href="/#/login"
    //     }
    //     return json
    // }).catch((err) => {
    //     return err
    // })
    console.log(data);
    $.ajax({
        type:"POST",
        url:`${serverIP}/knowledge/upload`,
        data:data,
        contentType:false,
        processData:false,
        xhrFields: { withCredentials: true },
        success:function(data){
            console.log(data);
            cb(data)
        }
    })

}
export function getknowledgefilelist(data:any) {
    return fetch(`${serverIP}/document?sourceId=${data}&&sourceType=1`, {
        method: 'GET',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
    }).then(res => res.json()).then((json) => {    
        if(json.code==20001){
            message.error("身份过期，请重新登录")
            window.location.href="/#/login"
        }
        return json
    }).catch((err) => {
        return err
    })
}

export function deletefile(data:any) {
    let form ={documentId:data,
                sourceType:"1"}
    return fetch(`${serverIP}/document?documentId=${data}`, {
        method: 'DELETE',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body:JSON.stringify(form)
    }).then(res => res.json()).then((json) => {    
        if(json.code==20001){
            message.error("身份过期，请重新登录")
            window.location.href="/#/login"
        }
        return json
    }).catch((err) => {
        return err
    })
}
