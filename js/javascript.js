window.onload = function() {

    const btn = document.getElementById("btnCadastrar");

    btn.addEventListener("click", function() {

        const inputs = document.querySelectorAll(".input");
        const senha = document.getElementsByName("senha")[0];
        const senha2 = document.getElementsByName("senha2")[0];

        for (let input of inputs) {
            if (input.value.trim() === "") {
                alert("Preencha todos os campos!");
                return;
            }
        }

        if (senha.value !== senha2.value) {
            alert("As senhas não coincidem!");
            return;
        }

        alert("Cadastro feito com sucesso!");

        inputs.forEach(input => {
            input.value = "";
        });

    });

};
