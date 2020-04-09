import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
import {message} from 'antd'
import $ from 'jquery'
export function getShare() {
    return fetch(`${serverIP}/share`, {
        method: 'GET',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
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
    // $.ajax({
    //     url:`${serverIP}/knowledge`,
    //     type:"GET",
    //     async:false,
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     crossDomain: true,
    //     headers: {'Content-Type': 'application/json'},
    //     success:function(data){
    //         console.log(data);
    //         cb(data)
           
    //     }
    // })
}
export function createShare(data:any,cb){
    console.log(data);
    $.ajax({
        type:"POST",
        url:`${serverIP}/share`,
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
export function deleteShare(data) {
    return fetch(`${serverIP}/share?sid=${data}`, {
        method: 'DELETE',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
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
