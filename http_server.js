const http=require('http');
const server=http.createServer((req,res)=>{

console.log('request received');
if(req.url=='/')
{
    res.write('welcome to my http server');
    res.end();
}
else if(req.url=='/contact'){
    if(req.method=='GET'){
    res.write('welcome to contact info');
        res.end();
    }
}else if(req.method=='POST'){
    
}


});
server.listen(3000,()=>{
    console.log('server listening on port 3000');
})