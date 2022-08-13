void main() {
  List<String> lista_nomes = [
    'Ricarth',
    'Natália',
    'Alex',
    'Andriu',
    'André',
  ]; // tipagem da lista
  print(lista_nomes);

  int idade = 32;
  double altura = 1.82;
  bool geek = true;
  const String nome = 'Renato Ferreira de Assis'; // constante
  final String apelido =
      'Re'; // mesmo resultado da constante mas nao precisa ser definido no começo
  // exemplo final String apelido

  List<dynamic> renato = [idade, altura, geek, nome, apelido];
  print(renato);

  String frase = 'Eu sou ${renato[4]} mas meu nome completo é:\n'
      '${renato[3]}, eu me considero geek? ${renato[2]}';

  print(frase);
}
