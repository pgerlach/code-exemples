var MyClass = module.exports = function MyClass(myName) {
  var self = this;

  self.myName = myName;

  MyClass.prototype.whatsMyName = function() {
    console.log("My name is", self.myName);
  }
};
