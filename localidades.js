$(document).ready(function() {




    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: { orderBy: "nome" }, // OrderBy: Deixar nomes em ordem
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados`,
        success: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>" + valueOfElement.sigla + "</option>" // criando uma variável contendo a tag HTML
                $("#uf").append(option) // Colocando a variável de HTML dentro da id uf
            })
        }
    })
});

// Mudando a opção uf
$('#uf').change(function(e) {
    e.preventDefault();
    $("#cidade").empty();
    var uf = $('#uf').val();



    $.ajax({
        type: 'GET',
        url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
        data: { orderBy: "nome" },
        dataType: "json",
        success: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>" + valueOfElement.nome + "</option>"
                $("#cidade").append(option)
            })
        }
    })
})