export const apiLogin = (username:string,password:string|number) => {
    console.log(username,password);
    // 模拟后端返回 后面会弄后端项目
    return Promise.resolve({
        data:{
            code:2000,
            data:{
                AccessToken:'123',
                RefreshToken:'123'
            }
        }
    })
}