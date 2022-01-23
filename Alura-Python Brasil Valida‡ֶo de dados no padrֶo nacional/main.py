from cpf import CPF

cpf = "15616987913"

# objeto_cpf = CPF(cpf)

fatia_um = cpf[:3]
fatia_dois = cpf[3:6]
fatia_tres = cpf[6:9]
fatia_quatro = cpf[9:11]

cpf_formatado = f"{fatia_um}.{fatia_dois}.{fatia_tres}-{fatia_quatro}"

print(cpf_formatado)
