import {ACCOUNT_ERR , PWD_ERR ,LOGIN_SUCCESS ,ACCOUNT_NOTFOUND,REGISTER_SUCCESS ,ACCOUNT_EXIST} from './APIType'


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
        else if(u[0].password !== password){
            loginCode = PWD_ERR;
        }


        setTimeout(()=>{
            if(loginCode === LOGIN_SUCCESS){
                setLoginInfo(u[0]);
            }

            resolve([u ,loginCode]);
        },100)
    })

}

export const checkLogined = ()=>{
    const d = getLoginInfo();
    return new Promise((resolve,reject)=>{
        resolve(d !== null);
    });
}
export const registerAccount = (name ,account , password , password2)=>{
    return new Promise((resolve , reject)=>{
        const u = getUserInfo(account);
 
        let registerCode = ""; 
        if(u.length !== 0){
            registerCode = ACCOUNT_EXIST;
        }

        setTimeout(()=>{
            if(registerCode !== ACCOUNT_EXIST){
                if(password === password2){
                    setUserInfo(name , account , password);
                    registerCode = REGISTER_SUCCESS;
                }
                else{
                    registerCode = PWD_ERR;
                }            
            }

            resolve([registerCode]);
        },100)
    })

}

const getLoginInfo = ()=>{
    const d = getAllSession();
    return d.loginInfo;
}
const setLoginInfo = (userInfo)=>{
    const all = getAllSession();
    const newSession = {
        ...all,
        loginInfo:userInfo
    }

    setAllSession(newSession);
}

const setUserInfo = (name , account , password)=>{
    const userList = getUserList() || [];
    userList.push({
        id: userList.length,
        name :name,
        account:account,
        password:password
    });
    setUserList(userList);
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

const setUserList = (userList)=>{
    const od = getAllSession();
    const d ={
        ...od,
        userList:userList
    } ;
    setAllSession(d);
}
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

