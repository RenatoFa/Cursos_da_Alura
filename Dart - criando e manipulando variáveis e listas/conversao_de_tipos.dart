void main() {
  // String to int
  var one = int.parse('1');
  print("Exe1");
  print(one);
  print(one.runtimeType);

  // String to double
  var string_to_double = double.parse('1.0');
  print("\nExe.2");
  print(string_to_double);
  print(string_to_double.runtimeType);

  // int to String
  var twenty = 20.toString();
  print("\nExe.3");
  print(twenty);
  print(twenty.runtimeType);

  // double to String
  var pi = 3.14316.toStringAsFixed(2);
  print("\nExe.4");
  print(pi);
  print(pi.runtimeType);
}
