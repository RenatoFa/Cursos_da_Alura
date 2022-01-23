import re  # Regular Expression -- RegEx


endereco = "Rua da Flores 72,\
            apartamento 1002, Laranjeiras,\
            Rio de Janeiro, RJ, 23440-120"


# como fazer um padrâo  em Regex
# sabemos que um cep possui 5 digitos + hifen(opcional) + digitos

# criar um padrão no regex
# [0-9] indica o intervalo de numeros buscados
# {5} indica a quantidade de numeros buscados depois do intervalo
# ? indica que uma padrao é optativo

padrao = re.compile("[0-9]{5}[-]{0,1}[0-9]{3}")
busca = padrao.search(endereco)

if busca:
    cep = busca.group()  # O metodo group - busca o padrao encontrado
    print(cep)
