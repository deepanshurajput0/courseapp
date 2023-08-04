export const sendToken =(res,user,message,statuscode=200)=>{
    const token = user.getJWTToken(); 
    const options = {
        expires: new Date(Date.now()+ 15*24*60*60*1000),
        httpOnly:true,
        secure:true,
        samSite:"none", 

    };
    
    res.status(201).cookie("token",token,options).json({
        success: true,
        message,
        user,

    })
}
