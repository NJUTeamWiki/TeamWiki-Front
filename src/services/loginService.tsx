const serverIp = 'http://172.19.241.57:8081'
export function login(data: any) {
    return fetch(`${serverIp}/user/sign_in?email=sad&&password=123`, {
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
    return fetch(`${serverIp}/user/sign_up?email=sad&&password=123&&username=sad`, {
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