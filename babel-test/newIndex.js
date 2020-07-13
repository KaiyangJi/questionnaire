// index.js
class Person {
    constructor(name) {
      this.name = name;
    }
    say() {
      console.log(this.name);
    }
  }

  // index.js
class Person1 {
    constructor(name) {
      this.name = name;
    }
    say() {
      console.log(this.name);
    }
  }
  
  const a = [];
  a.find((item) => {
    return item.a === 1;
  });

  () => {
      console.log(1);
  }
  [].includes(1)

  var c = {
    a: 1,
};
var d = {
    ...c,
};

const list = [1,2,3];
list.forEach((item) => {
    console.log(item);
})

const list1 = [1,2,3];
list1.map((item) => {
    console.log(item);
})