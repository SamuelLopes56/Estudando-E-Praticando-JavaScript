function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        //btnClear: document.querySelector('.btn-clear'),
        
        
        
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta); // Esse método 'eval()' é muito perigoso, ele interpreta strings como código javaScript ou seja, tanto um "2+2" ele retorna 4 quanto um "alert("Olá mundo!")" ele retorna o alert. Então deve-se tomar muito cuidado ao usar isso pois abre uma brecha enorme na segurança. Deve-se sempre tratar os dados ao usar esse método e cuidar o que pode ser escrito.
                
                if(!conta){
                    alert('Conta inválida!');
                }

                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida! Entrou no catch (error)');
                this.display.value = '';
                return; // O return aqui não é necessário já que não tem mais nada a ser executado. Porém ele é bom para obrigar a função a parar caso caia no catch (error).
            }
        },

        cliqueBotoes(){
            // this -> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }) // Caso a função fosse declarada normalmente aqui eu usaria o método .bind(this) para a função manter o this como a calculadora e não como o document.
        }     // Mas como foi usado uma arrow function eu não necessito, já que a arrow function impede que o this mude. O this continua o mesmo o qual era antês de entrar na arrow function.
               // Mas isso é um problema caso eu queira que o this mude, nesse caso eu usaria uma function normal.



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
