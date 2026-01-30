// type
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

const awesome: Human = {
  breath: true,
  breed: true,
  think: true,
};

// interface
interface Vehicle {
  move: true;
}

interface Car extends Vehicle {
  wheel: 4;
}

const porshe: Car = {
  move: true,
  wheel: 4,
};
