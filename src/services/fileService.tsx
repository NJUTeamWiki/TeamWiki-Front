import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
import {message} from 'antd'
export function uploadfile(data:any) {
    return fetch(`${serverIP}/knowledge/upload?file=${data.file}&&knowledgeId=1`, {
        method: 'POST',
        mode: "cors",
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'multipart/form-data',
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
    return fetch(`${serverIP}/document`, {
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
