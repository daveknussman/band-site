var ourObject = {
  property1: "hello",
  property2: 42,
  property3: ["1", 2, "String"]
};

var x = 3;
var text = "string";
var unassignedName;
var boolean = true;


console.log(text);

function makeUserName (first,last,middle ){
  var userName = first[0] + middle[0] + last;
  console.log(userName);
  return userName;
}

makeUserName ('Dave','Raymond','Knussman')

console.log(ourObject.property2);

// console.log();
