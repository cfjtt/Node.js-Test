function add(student){
	console.log('Add student'+student)
}
//为什么使用exports呢，使用exports是为了让add方法暴露出来，便于模块的调用
exports.add=add