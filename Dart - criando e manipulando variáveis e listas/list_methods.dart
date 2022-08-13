void main() {
  // forEach()
  var fruits = ['banana', 'pineapple', 'watermelon'];
  fruits.forEach((fruit) {
    print(fruit);
  });

  // map()
  var mappedFruits = fruits.map((fruit) => 'I love ${fruit}').toList();
  print(mappedFruits);

  // contains()
  var numbers = [1, 3, 2, 5, 4];
  print(numbers.contains(2));
}
