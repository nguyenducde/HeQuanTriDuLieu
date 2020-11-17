const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port = 3000
//Models
var SinhVien=require('./models/SinhVien');




var configDB='mongodb://nguyenducde:lalang123@cluster0-shard-00-00-pxb4j.mongodb.net:27017,cluster0-shard-00-01-pxb4j.mongodb.net:27017,cluster0-shard-00-02-pxb4j.mongodb.net:27017/Lab?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
var connectOptions=
{  useFindAndModify:false,
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true
}
mongoose.Promise = global.Promise;
mongoose.connect(configDB, connectOptions)
  .then(
  () => { 
    console.log('Connected to database');
  },
  err => { 
    console.log('Can\'t connect to database: '+err);
  }
);

var arrobj = [
  {
      "MSSV":"MS1710144",
    "HoVaTen":"Nguyễn Đức Đề",
    "NamSinh":"1999",
    "DiemMon1":8.5,
    "DiemMon2":9.5,
    "DiemMon3":10,
    "Email":"ducde678@gmail.com",
    "SDT":"0365185553"
  },
    {
      "MSSV":"MS1710145",
    "HoVaTen":"Đậu Quang Đồng",
    "NamSinh":"1999",
    "DiemMon1":8.5,
    "DiemMon2":9.5,
    "DiemMon3":8,
    "Email":"17101458@gmail.com",
    "SDT":"035541247"
  },
    {
      "MSSV":"MS1710146",
    "HoVaTen":"Nguyễn Thiên Phong",
    "NamSinh":"1999",
    "DiemMon1":4.5,
    "DiemMon2":9.5,
    "DiemMon3":10,
    "Email":"thienphong@gmail.com",
    "SDT":"016847514"
  },
    {
      "MSSV":"MS1710256",
    "HoVaTen":"Nguyễn Thiện Nhân",
    "NamSinh":"1999",
    "DiemMon1":6.5,
    "DiemMon2":8.5,
    "DiemMon3":6,
    "Email":"thiennhan@gmail.com",
    "SDT":"0365175624"
  },
   {
      "MSSV":"MS1710198",
    "HoVaTen":"Lê Anh Minh",
    "NamSinh":"2000",
    "DiemMon1":8.5,
    "DiemMon2":6.5,
    "DiemMon3":10,
    "Email":"anhminh@gmail.com",
    "SDT":"0168478552"
  },
    {
      "MSSV":"MS1710215",
    "HoVaTen":"Đậu Uyển Nhi",
    "NamSinh":"2001",
    "DiemMon1":7.5,
    "DiemMon2":6.5,
    "DiemMon3":5.5,
    "Email":"uyennhi@gmail.com",
    "SDT":"0345687156"
  },
    {
      "MSSV":"MS1710120",
    "HoVaTen":"Lê Hồng Ngọc",
    "NamSinh":"1998",
    "DiemMon1":5.5,
    "DiemMon2":4.5,
    "DiemMon3":7,
    "Email":"hongngoc@gmail.com",
    "SDT":"048752658"
  },
    {
      "MSSV":"MS1610250",
    "HoVaTen":"Nguyễn Nhật Minh",
    "NamSinh":"1997",
    "DiemMon1":5.5,
    "DiemMon2":6.5,
    "DiemMon3":4,
    "Email":"nhatminh1997@gmail.com",
    "SDT":"035150265"
  },
    {
      "MSSV":"MS1710623",
    "HoVaTen":"Nguyễn Thùy Vi",
    "NamSinh":"2003",
    "DiemMon1":7.5,
    "DiemMon2":6.5,
    "DiemMon3":4,
    "Email":"thuyvy@gmail.com",
    "SDT":"063420535"
  },
    {
      "MSSV":"MS1710260",
    "HoVaTen":"Nguyễn Văn Hà",
    "NamSinh":"1999",
    "DiemMon1":8.5,
    "DiemMon2":9.5,
    "DiemMon3":10,
    "Email":"vanha1998@gmail.com",
    "SDT":"0365187552"
  }
  
]

// SinhVien.insertMany(obj,(err,result)=>{
//   if(result)
//   {  
//     console.log("Thêm thành công");
//     console.log(result);
//   } 
// })
SinhVien.findOneAndUpdate({MSSV:"MS1710144"},
  {$set:{HoVaTen:"Nguyễn Văn Tèo"}},(err,result)=>{
    console.log(result);
  });
SinhVien.find({},(err,result)=>{
  if(result)
  {  
    console.log("Kết quả tìm kiếm:");
    console.log(result);
  }
  
});
// SinhVien.findOneAndDelete({MSSV:"MS1710144"},(err,result)=>{
//   SinhVien.findOne({MSSV:"MS1710144"},(err,kq)=>{
//   if(!kq)
//   {
//     console.log("Xóa thành công");
//   }
//   })
  
// })




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})