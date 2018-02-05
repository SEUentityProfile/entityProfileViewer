function abc(str){
  alert(str);
}
function connect(){ 
   var conn = new ActiveXObject("ADODB.Connection"); 
  conn.Open("Provider=SQLOLEDB.1; Data Source=F:\\study\\实体画像\\Vertion_4\\Result\\linkedmdb;" 
  +" Initial Catalog=MyBulletin"); 
  var rs = new ActiveXObject("ADODB.Recordset"); 
  var sql="select id,name from Category"; 
  rs.open(sql, conn);
  alert(rs(0));//取出第一个来
  rs.close();  
  rs = null; 
  conn.close();  
  conn = null;
  } 