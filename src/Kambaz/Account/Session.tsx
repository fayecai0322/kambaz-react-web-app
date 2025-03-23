import * as client from "./client";
import {useEffect, useState} from "react";
import{setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";

export default function Session({children}: {children: any}){
    const[pending, setPending] = useState(true);
    const dispatch = useDispatch();
    // 请求后端 profile，获取当前登录用户
    const fetchProfile = async() => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser)); // 存入 Redux
        } catch (err: any) {
            console.error(err);
        }
        setPending(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) { 
        return children;
    }
}