import { serverIP } from '../utils/GlobalConstants' 
export function login(data: any) {
    return fetch(`${serverIP}/user/sign_in`, {
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
export function sign(data: any) {
    return fetch(`${serverIP}/user/sign_up`, {
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