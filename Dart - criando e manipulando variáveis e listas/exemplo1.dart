void main() {
  String apelido = 'Re';
  String nome = 'Renato Ferreira de Assis';
  bool geek = true;
  double altura = 1.82;
  int idade = 32;

  List<dynamic> lista = [apelido, nome, geek, altura, idade];

  String frase = 'Eu sou ${lista[0]}\n'
      'mas meu nome completo é: ${lista[1]}\n'
      'eu me considero geek? ${lista[2]}\n'
      'Eu tenho ${lista[3]} metros de altura e\n'
      '${lista[4]} anos de idade';

  print(frase);
}
