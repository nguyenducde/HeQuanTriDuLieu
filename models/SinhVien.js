var mongoose = require('mongoose');


var SinhVienSchema=new mongoose.Schema({
MSSV:String,
HoVaTen:String,
NamSinh:String,
DiemMon1:Number,
DiemMon2:Number,
DiemMon3:Number,
Email:String,
SDT:String
 
});

var SinhVien=mongoose.model('SinhViens',SinhVienSchema,'SinhVien');
module.exports=SinhVien;