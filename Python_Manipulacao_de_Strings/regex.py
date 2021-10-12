import re

email1 = "Meu numero é 1234-1234"
email2 = "Fale comigo em 1234-1234 esse é o meu telefone"
email3 = "1234-1234 é o meu celular"


padrao = "[0-9]{4}[-][0-9]{4}"

retorno = re.search(padrao, email1)
print(retorno.group())
