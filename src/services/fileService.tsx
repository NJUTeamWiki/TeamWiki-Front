import { serverIP } from '../utils/GlobalConstants' 
import {hashHistory} from 'react-router-dom'
export function uploadfile(data:any) {
    return fetch(`${serverIP}/document`, {
        method: 'POST',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
        }),
        body:data

    }).then(res => res.json()).then((json) => {    
        hashHistory.push('/login')
        return json
    }).catch((err) => {
        return err
    })
}
