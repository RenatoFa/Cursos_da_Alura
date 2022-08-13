void main(List<String> args) {
  int idade = 17;
  bool maiorDeIdade;

  if (idade >= 18) {
    maiorDeIdade = true;
  } else {
    maiorDeIdade = false;
  }

  String frase = 'Eu sou maior de idade? ${maiorDeIdade}';

  print(frase);
}
