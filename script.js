let funcionarios = [];
 
// Função para cadastrar funcionários
function cadastrarFuncionarios() {
    for (let i = 0; i < 20; i++) {
        const matricula = prompt(`Matrícula do funcionário ${i + 1}:`);
        if (!matricula) return; // Cancela se não inserir matrícula
 
        const nome = prompt(`Nome do funcionário ${i + 1}:`);
        if (!nome) return; // Cancela se não inserir nome
 
        const salario = parseFloat(prompt(`Salário do funcionário ${nome} (R$):`));
        if (isNaN(salario)) return; // Cancela se salário não for válido
 
        funcionarios.push({ matricula, nome, salario });
    }
 
    // Ordena funcionários por matrícula
    funcionarios.sort((a, b) => a.matricula - b.matricula);
    alert('Cadastro concluído e registros ordenados por matrícula!');
}
 
// Função para pesquisar um funcionário pelo número de matrícula
function pesquisarFuncionario() {
    const matricula = prompt("Digite a matrícula do funcionário:");
    const funcionario = funcionarios.find(f => f.matricula === matricula);
 
    if (funcionario) {
        alert(`Funcionário encontrado: ${funcionario.nome}, Salário: R$${funcionario.salario.toFixed(2)}`);
    } else {
        alert("Funcionário não encontrado.");
    }
}
 
// Função para apresentar registros de salários baseados em uma condição
function apresentarSalarios(limite, condicao) {
    const tabelaBody = document.getElementById('tabela-body');
    tabelaBody.innerHTML = ''; // Limpa a tabela antes de mostrar novos resultados
 
    const resultados = funcionarios.filter(f => {
        if (condicao === '>') return f.salario > limite;
        if (condicao === '<') return f.salario < limite;
        return f.salario === limite;
    });
 
    if (resultados.length === 0) {
        alert(`Nenhum funcionário encontrado.`);
        return;
    }
 
    resultados.forEach(f => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${f.matricula}</td><td>${f.nome}</td><td>${f.salario.toFixed(2)}</td>`;
        tabelaBody.appendChild(row);
    });
}
 
// Função para sair do programa
function sair() {
    if (confirm('Deseja realmente sair?')) {
        alert('Saindo do programa.');
    }
}