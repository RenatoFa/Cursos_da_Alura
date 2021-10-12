from banco_example import ExtratorArgumentosUrl


url = "https://bitebank.com/cambio?moedaorigem=moedadestino&moedadestino=dolar&valor=1500"
argumentosUrl = ExtratorArgumentosUrl(url)
valor = argumentosUrl.extraiValor()
moedaOrigem, moedaDestino = argumentosUrl.extraiArgumentos()
print(moedaOrigem, moedaDestino, valor)


urlByteBank = 'https://bytebank.com'
url1 = 'https://bytebank.com/busca?q='
