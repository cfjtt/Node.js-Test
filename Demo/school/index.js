var kclass=require('./class');
exports.add=function(classes){
	classes.forEach(function(item,index){
		kclass.add(item.teacherName,item.students);
	})
}
//kclass.add('Scott',['白富美','高富帅']);