function hello(constructorFn: Function) {
  console.log(constructorFn);
}

@hello
class Person {

}

// node output/decorator.js returns '[Function: Person]'
