import { serverIP } from '../utils/GlobalConstants' 
import {message} from 'antd'
import $ from 'jquery'
import { url } from 'inspector'
export function login(data: any) {
    return fetch(`${serverIP}/user/sign_in`, {
        method: 'POST',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
        body:JSON.stringify(data)

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
    //     url:`${serverIP}/user/sign_in`,
    //     type:"POST",
    //     async:false,
    //     dataType:"json",
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     crossDomain: true,
    //     data:JSON.stringify(data),
    //     headers: {'Content-Type': 'application/json'},
    //     success:function(data){
    //         console.log(data);
    //         cb(data)
           
    //     }
    // })

}
export function sign(data: any) {
    return fetch(`${serverIP}/user/sign_up`, {
        method: 'POST',
        credentials: 'include',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
        body:JSON.stringify(data)

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
    //     url:`${serverIP}/user/sign_up`,
    //     type:"POST",
    //     data:data,
    //     success:function(data){
    //         console.log(data);
    //         return data;
    //     }
    // })
}
export function sign_out() {
    return fetch(`${serverIP}/user/sign_out`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors",

    }).then(res => res.json()).then((json) => {
        return json
    }).catch((err) => {
        return err
    })
    // $.ajax({
    //     url:`${serverIP}/user/sign_up`,
    //     type:"POST",
    //     data:data,
    //     success:function(data){
    //         console.log(data);
    //         return data;
    //     }
    // })
}
export function update_user(data:any) {
    return fetch(`${serverIP}/user/profile`, {
        method: 'PUT',
        credentials: 'include',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
         body:JSON.stringify(data)
    }).then(res => res.json()).then((json) => {
        return json
    }).catch((err) => {
        return err
    })
    // $.ajax({
    //     url:`${serverIP}/user/sign_up`,
    //     type:"POST",
    //     data:data,
    //     success:function(data){
    //         console.log(data);
    //         return data;
    //     }
    // })
}
export function getUser(){
    return fetch(`${serverIP}/user`, {
        method: 'GET',
        credentials: 'include',
        mode: "cors",
        
    }).then(res => res.json()).then((json) => {
        return json
    }).catch((err) => {
        return err
    })
}