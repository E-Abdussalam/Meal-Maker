const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return {
      appetizers: this.appetizers,
    };
  },
  get mains() {
    return {
      mains: this.mains,
    };
  },
  get desserts() {
    return {
      desserts: this.desserts,
    };
  },
  set appetizers(appetizersIn) {
    this.appetizers = appetizersIn;
  },
  set mains(mainsIn) {
    this.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this.desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const mains = this.getRandomDishFromCourse("mains");
    const desserts = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + mains.price + desserts.price;
    return `Your meal is ${appetizer.name} ${mains.name} ${desserts.name} and the price is ${totalPrice}$.`;
  },
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("mains", "Cheeseburger", 10.25);
menu.addDishToCourse("desserts", "Pudding", 3.75);

let meal = menu.generateRandomMeal();
console.log(meal);
