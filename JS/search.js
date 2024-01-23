function filterFoods() {
    // Obter o valor do campo de pesquisa
    var searchTerm = document.getElementById("search").value.toLowerCase();

    // Obter todas as colunas
    var columns = document.getElementsByClassName("column");

    // Iterar sobre as colunas e mostrar/ocultar conforme necessário
    for (var i = 0; i < columns.length; i++) {
      // Obter o ID da coluna atual
      var columnId = columns[i].id.toLowerCase();

      // Verificar se o termo de pesquisa está presente no ID da coluna
      var shouldShow = columnId.includes(searchTerm);

      // Mostrar ou ocultar a coluna com base na correspondência
      columns[i].style.display = shouldShow ? "block" : "none";
    }
  }