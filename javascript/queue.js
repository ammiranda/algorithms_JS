var Queue = function() {
	[].forEach.call(arguments, this.enqueue.bind(this));
};

var Node = function(data, prev) {
	this.data = data;
	this.prev = prev;
};

Queue.prototype.enqueue = function(data) {
	var node = new Node(data);
