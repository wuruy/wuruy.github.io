function myFunction() {
    var pap = document.getElementById("myPopup");
    pap.classList.remove("hide");
	pap.classList.add("show");
}
var count=0;


 



window.onload = function() {

	var todoList = [];
	if (localStorage.getItem('todo')!=undefined) {
		todoList = JSON.parse(localStorage.getItem('todo'));
		out();
	}

	document.getElementById('add').onclick = function(){
		var d = document.getElementById('in').value;
		var temp = {};
		temp.todo = d;
		temp.check = false;
		var i = todoList.length;
		todoList[i] = temp;
		console.log(todoList);
		out();
		localStorage.setItem('todo', JSON.stringify(todoList) );
		
		var pap = document.getElementById("myPopup");
		pap.classList.remove("show");
    	pap.classList.add("hide");
		document.getElementById('form').reset();
	}
	document.getElementById('rem').onclick = function() {
		localStorage.removeItem('todo');
		window.location.reload();
	}

	function out() {
		var out = '';
		for (var key in todoList) {
			if (todoList[key].check == true) {
				out += '<input type="checkbox" class="check" checked>';
			}
			else {
				out += '<input type="checkbox" class="check">';
			}
			out += todoList[key].todo + '<br>';
		}
		document.getElementById('out').innerHTML = out;
	}
}

