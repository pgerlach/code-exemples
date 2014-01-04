var MyClass = module.exports = function MyClass(myName) {
  this.myName = myName;
};

MyClass.prototype.whatsMyName = function() {
  console.log("My name is", this.myName);
}

MyClass.echo = function(str) {
  console.log("echo:", str);
}
