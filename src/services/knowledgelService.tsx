import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
import {message} from 'antd'
import $ from 'jquery'

export function getKnowledgelist() {
    return fetch(`${serverIP}/knowledge`, {
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
export function createKnowledge(data:any){
    return fetch(`${serverIP}/knowledge`, {
        method: 'POST',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        credentials: 'include',
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
}
export function getRecommend(){
    return fetch(`${serverIP}/knowledge/recommend`, {
        method: 'GET',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        credentials: 'include',
      

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
export function getHistory(){
    return fetch(`${serverIP}/document/activities`, {
        method: 'GET',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        credentials: 'include',
      

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
