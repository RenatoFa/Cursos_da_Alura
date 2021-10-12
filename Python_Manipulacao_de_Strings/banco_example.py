class ExtratorArgumentosUrl:
    def __init__(self, url):
        if self.urlEhValida(url):
            self.url = url.lower()
        else:
            raise LookupError("Url Invalida!!!")

    @staticmethod
    def urlEhValida(url):
        if url and url.startswith("https://bytebank.com"):
            return True
        else:
            return False

    def encontraIndiceInicial(self, moedaBuscada):
        return self.url.find(moedaBuscada) + len(moedaBuscada)

    def trocaMoedaOrigem(self):
        self.url = self.url.replace('moedadestino', 'real', 1)
        print(self.url)

    def extraiArgumentos(self):

        buscamoedaorigem = "moedaorigem=".lower()
        buscamoedadestino = "moedadestino=".lower()

        indiceInicialMoedaOrigem = self.encontraIndiceInicial(
            buscamoedaorigem)
        indiceFinalMoedaOrigem = self.url.find("&")

        moedaOrigem = self.url[indiceInicialMoedaOrigem:indiceFinalMoedaOrigem]

        if moedaOrigem == 'moedadestino':
            self.trocaMoedaOrigem()
            indiceInicialMoedaOrigem = self.encontraIndiceInicial(
                buscamoedaorigem)
            indiceFinalMoedaOrigem = self.url.find("&")
            moedaOrigem = self.url[indiceInicialMoedaOrigem:indiceFinalMoedaOrigem]

        indiceInicialMoedaDestino = self.encontraIndiceInicial(
            buscamoedadestino)
        indiceFinalMoedaDestino = self.url.find("&valor")

        moedaDestino = self.url[indiceInicialMoedaDestino:indiceFinalMoedaDestino]

        return moedaOrigem, moedaDestino

    def extraiValor(self):
        buscaValor = "valor="
        indiceInicialValor = self.encontraIndiceInicial(buscaValor)
        valor = self.url[indiceInicialValor:]
        return valor
