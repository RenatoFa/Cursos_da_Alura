"""
Fatiamento do pytho de uma string
exemplo: texto = ´Alura'
texto[0:5]
O operador de fatiamento [a:b], utilizado para obter uma substring desde
o índice a até o índice b - 1 da string original. Lembrando que b - 1 pois
 o segundo argumento do fatiamento é exclusivo.
"""

"""
String sâo imutaveis no python
"""

# url = "bytebank.com/cambio?quantidade=100&moedaOrigem=real&moedaDestino=dolar"
url = ""

# Sanitização da URL
url = url.strip()  # metodo para substituir


# Validação da URL
if url == "":
    raise ValueError("A URL está vazia")

# Separa base e os parâmetros
indice_interrogacao = url.find('?')
url_base = url[:indice_interrogacao]
url_parametros = url[indice_interrogacao+1:]

# Busca o valor de um parâmetro
parametro_de_busca = 'quantidade'
indice_parametro = url_parametros.find(parametro_de_busca)
indice_valor = indice_parametro + len(parametro_de_busca) + 1
indice_e_comercial = url_parametros.find('&', indice_valor)
if indice_e_comercial == -1:
    valor = url_parametros[indice_valor:]
else:
    valor = url_parametros[indice_valor:indice_e_comercial]

print(valor)
