import * as client from "./client";
import {useEffect, useState} from "react";
import{setCurrentUser} from "./reducer";
import {useDispatch} from "react-redux";
//globally
export default function Session({children}: {children: any}){
    const[pending, setPending] = useState(true);
    const dispatch = useDispatch();
    // 请求后端 profile，获取当前登录用户
    const fetchProfile = async() => {
        try {
            const currentUser = await client.profile(); // 向 /api/users/profile 请求
            dispatch(setCurrentUser(currentUser)); // 存入 Redux
        } catch (err: any) {
            console.error(err);// 如果未登录，后端返回 401，进入 catch（没关系）
        }
        setPending(false); // 无论是否登录都要结束等待状态
    };
    useEffect(() => {
        fetchProfile();  // 页面加载时执行一次
    }, []);
    if (!pending) { 
        return children;// 如果 profile 拉取完毕，渲染 children 页面内容
    }
}