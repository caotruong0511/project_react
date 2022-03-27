import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    if(localStorage.getItem("datauser")){
        const users=JSON.parse(localStorage.getItem("datauser")||'{}').user;
        if(users.roll==2){
            <Navigate to={"/admin"}/>
        }else{
         return   <Navigate to={"/signin"}/>
        }

    }
    return props.children
}

export default PrivateRouter