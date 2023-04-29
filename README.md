# Consumo API ChatGPT

Este código JavaScript é utilizado para enviar perguntas para a API da OpenAI e receber respostas em tempo real. O código é composto por uma constante `formPerguntaChat` que é utilizada para obter o elemento HTML que contém o formulário de perguntas do chat.

Antes de utilizar o código, é necessário que você adquira uma chave de API (OPENAI_API_KEY) para acessar a API da OpenAI.

Ao enviar uma pergunta através do formulário, o código envia uma requisição para a API da OpenAI, que retorna uma resposta com base na pergunta enviada.

Este código utiliza o método fetch para enviar a requisição para a API e a promessa async/await para aguardar a resposta da API antes de atualizar o campo de resposta do chat.

Após o recebimento da resposta, o código atualiza o campo de resposta do chat com a resposta retornada pela API. Caso a API não retorne uma resposta, o campo de resposta é atualizado com a mensagem "Sem resposta".

Para utilizar este código, é necessário adicionar a sua chave de API (OPENAI_API_KEY) na variável correspondente antes de executar o código.

Para executar o código, é necessário incluí-lo em um arquivo HTML e importá-lo através de uma tag `<script>`. O código deve ser executado após a carregamento da página para que o formulário seja detectado corretamente.