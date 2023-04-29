const formPerguntaChat = document.getElementById('form-question-chat');

const OPENAI_API_KEY = "sua_chave";

if(formPerguntaChat){
    formPerguntaChat.addEventListener("submit", async (e) => {

        e.preventDefault();

        document.getElementById('btn-pergunta-chat').value = "Pesquisando...";

        let pergunta = document.getElementById('campo-pergunta').value;
        
        document.getElementById('pergunta').innerHTML = pergunta;

        //document.getElementById('resposta').innerHTML = "<span></span>";

        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",

            headers: {
                Accept: "aplication/json",
                "Content-Type": "aplication/json",
                Authorization: "Bearer " + OPENAI_API_KEY,
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: pergunta,
                max_tokens: 2048,
                temperature: 0.5
            }),
        })
        .then((resposta) => resposta.json())
        .then((dados) => {
            document.getElementById('resposta').innerHTML = dados.choices[0].text;
        })
        .catch(() => {
            document.getElementById('resposta').innerHTML = "Sem resposta";
        });
        document.getElementById('btn-pergunta-chat').value = "Enviar";
    });
}