import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
export function getKnowledgelist() {
    return fetch(`${serverIP}/knowledge`, {
        method: 'GET',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
       

    }).then(res => res.json()).then((json) => {   
        debugger;
        hashHistory.push('/login') 
        return json
    }).catch((err) => {
        return err
    })
}
export function createKnowledge(data:any){
    return fetch(`${serverIP}/knowledge`, {
        method: 'POST',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),
        body:JSON.stringify(data)

    }).then(res => res.json()).then((json) => {    
        return json
    }).catch((err) => {
        return err
    })
}
