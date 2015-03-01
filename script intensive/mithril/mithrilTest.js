var todo = {};

todo.Todo = function(data) {
	this.description = m.prop(data.description);
	this.done = m.prop(false);
};

todo.TodoList = Array;

//define the view-model
todo.vm = (function() {
    var vm = {}
    vm.init = function() {
        //a running list of todos
        vm.list = new todo.TodoList();

        //a slot to store the name of a new todo before it is created
        vm.description = m.prop("");

        //adds a todo to the list, and clears the description field for user convenience
        vm.add = function(description) {
            if (description()) {
                vm.list.push(new todo.Todo({description: description()}));
                vm.description("");
            }
        };
    }
    return vm
}())

todo.controller = function() {
	todo.vm.init();
};


var testN = m.prop("");

todo.view = function() {
	return m("html", [
		m("body",[
			m("input"),
            m("button", "Add"),
            m("table", [
                m("tr", [
                    m("td", [
                        m("input[type=checkbox]")
                    ]),
                    m("td", "task description"),
                ])
            ]),
            m("p",{innerHTML: testN()})
		])
	]);
};



todo.vm.init();


m.render(document, todo.view()); // input is blank

testN("mergeeeee");

m.render(document, todo.view());
//m.render(document, todo.view()); // input is blank
