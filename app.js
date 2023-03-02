function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }


let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}


  const instructorTwo = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

function createAnimal(species, func, sound) {
    return {
        species,
        [func](){
            return sound;
        }
    }
}