import React from 'react'
import { Navigate } from 'react-router-dom';
import { isauthenticate } from '../utils/localstoage';

type PrivateRouterProps = {
    children: JSX.Element
}
  const {user,token}= isauthenticate(); 

const PrivateRouter = (props: PrivateRouterProps) => {
    if(user){
      
        if(user.roll!=2){
            return <Navigate to={"/signin"}/>
            
        }else{
            <Navigate to={"/admin"}/>
        }

    }
    return props.children
}

export default PrivateRouter