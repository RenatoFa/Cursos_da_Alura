from flask import Flask, render_template, request, redirect

# iniciar o Flask
app = Flask(__name__)


class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome = nome
        self.categoria = categoria
        self.console = console


jogo1 = Jogo('Super Mario', 'Ação', 'SNES')
jogo2 = Jogo('Pokemon Gold', 'RPG', 'GBA')
jogo3 = Jogo('Mortal Kombat', 'Luta', 'SNES')
lista = [jogo1, jogo2, jogo3]


@app.route('/')
def index():
    # configuração de uma rota
    return render_template('lista.html', titulo='Jogos', jogos=lista)


@app.route('/novo')
# rota para criação de um novo jogo
def novo():
    return render_template('novo.html', titulo='Novo Jogo')


@app.route('/criar', methods=['POST', ])
def criar():
    nome = request.form['nome']
    categoria = request.form['categoria']
    console = request.form['console']

    jogo = Jogo(nome, categoria, console)
    lista.append(jogo)
    return redirect('/')


# iniciar o servidor do Flask
app.run(debug=True)

# mudança de porta
# app.run(host='0.0.0.0', port=8080)
