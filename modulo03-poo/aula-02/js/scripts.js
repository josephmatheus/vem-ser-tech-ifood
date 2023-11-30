console.log("===== Aula 02 =====");

const agenda = new Agenda();

try {
    const contato = new Contato("Tião", "1111-1111", "31-12-1970");
    const contato2 = new Contato("Tião", "1111-2222", "31-12-1970");
    agenda.adicionarContatos(contato)
    agenda.adicionarContatos(contato2)
    agenda.buscarContato("tião")
    agenda.removerContato("tião")
} catch (error) {
    console.warn("Tratando erro");
} finally {
    console.log("Passou pelo finally");
}
