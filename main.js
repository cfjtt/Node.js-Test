var buf=new Buffer(256);
var length=buf.write("缓冲区","utf-8");
console.log("写入的字节数为:"+length);
console.log("缓冲区长度为"+buf.toString("utf-8").length);


buf=new Buffer("缓冲区大小为");
var json=buf.toJSON();
var s=json['data'].toString();
console.log(typeof(s)+" "+s);
