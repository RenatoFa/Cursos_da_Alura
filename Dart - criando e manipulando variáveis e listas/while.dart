void main() {
  int energia = 100;
  while (energia >= 0) {
    print(energia);
    energia -= 10;
  }

  do {
    print("Mais uma Repetição");
    energia = energia - 10;
    print("Mais uma Repetição $energia");
  } while (energia > 0);
}
