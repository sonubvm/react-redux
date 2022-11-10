import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const loadUser = () => {
    return {
        type: 'LoadUser',

    }
}
export const addUser = (user) => {
    return {
        type:"AddData",
        payload:user
    }
}
export const editUser = (user) => {
    return {
        type:"EditData",
        payload : user
    }
}
export const deleteUser = (id) => {
    
    return {
        type : "DeleteData",
        payload :id

    }
    
}
export const handleSubmitvalue = (user) => {

    let total = 0;
    user.map((index)=>{
        total += parseInt(index.num);
    })
    
    return {
        type: "Add",
        payload:total
    }
}

