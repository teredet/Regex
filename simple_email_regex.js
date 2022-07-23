var reg = /^\S+@\S+\.\S+$/

console.log('1', reg.test("test@test.com")); // true
console.log('2', reg.test("test@test"));     // false
console.log('3', reg.test("test.com"));      // false
console.log('4', reg.test("test"));          // false