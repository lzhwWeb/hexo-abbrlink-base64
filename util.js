const eng = ['a','b','c','d','e','f','g','h','i','j'];

//文件名Base64后 根据算法从编码中取10位作为新文件名
module.exports.getNewNameBase64 = function(fileName){
    var fi_bs64 = Buffer.from(fileName).toString('base64')//转成base64编码
    var arr = fi_bs64.split("");
    var len = arr.length;
    var fis = "";
    for(var i=1;i<=10;i++){
        var s1 = arr[Math.floor(len/(2*i))];
        if(s1=='/'||s1=='+'){
            var eng_index = len % 10;
            s1 = eng[eng_index];
        }
        fis = fis + s1;
    }
    return fis;
}