import {ACCOUNT_ERR , PWD_ERR ,LOGIN_SUCCESS} from './APIType'


export const initSession =()=>{
    if(checkSessionExist()){
        return;
    }
    
    const session = {
        userList : [],
        loginInfo : null
    }

    setAllSession(session);
}

export const checkSessionExist = ()=>{
    return getAllSession() !== null;
}
export const loginToWeb = (account , password)=>{


    return new Promise((resolve , reject)=>{
        const u = getUserInfo(account);
        let loginCode = LOGIN_SUCCESS;
    
        if(u.length === 0){
            loginCode = ACCOUNT_ERR;
        }
        else if(u.Password !== password){
            loginCode = PWD_ERR;
        }


        setTimeout(()=>{
            if(loginCode === LOGIN_SUCCESS){
                setLoginInfo(u);
            }

            resolve([u ,loginCode]);
        },100)
    })

}

const setLoginInfo = (userInfo)=>{
    const all = getAllSession();
    const newSession = {
        ...all,
        loginInfo:userInfo
    }

    setAllSession(newSession);
}

const getUserInfo = (account)=>{
    const userList = getUserList();
    if(userList === undefined){
        return [];
    }

    return userList.filter((user)=>{
        return user.account === account;
    });
};


const getUserList = ()=>{
    const d = getAllSession() ;
    if(d === null){
        return undefined;
    }
    return d.userList;
}

const getAllSession = ()=>{
    return JSON.parse(window.localStorage.getItem("cms")) ;
}

const setAllSession = (d)=>{
    window.localStorage.setItem("cms" , JSON.stringify(d));
}

