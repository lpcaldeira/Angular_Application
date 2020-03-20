app.controller("UsuarioController", function ($scope, $http) {

    $scope.Usuario = {};

    // BUSCA TODOS os usuários da base de dados
    $http.get('http://localhost:58969/api/Usuario').
        success(function (data, status, headers, config) {
            $scope.Usuarios = data;
        }).
        error(function (data, status, headers, config) {
            //alert("Ocorreu um erro ao executar a operação!");
        });

    // Envia requisição para CRIAR um usuário novo na base de dados
    $scope.submitNovo = function () {
        if ($scope.Email && $scope.Senha && $scope.ConfirmaSenha && $scope.NivelAcesso) {
            $scope.Usuario = {
                "Nome": $scope.Nome,
                "Sobrenome": $scope.Sobrenome,
                "Email": $scope.Email,
                "Senha": $scope.Senha,
                "ConfirmaSenha": $scope.ConfirmaSenha,
                "NivelAcesso": $scope.NivelAcesso
            }
            $http.post('http://localhost:58969/api/Usuario', $scope.Usuario).
                success(function (data, status, headers, config) {
                    alert('Usuário criado com sucesso!');
                }).
                error(function (data, status, headers, config) {
                    //alert("Ocorreu um erro ao executar a operação!");
                });
        }
    };

    // Envia requisição para EDITAR um usuário da base de dados
    $scope.submitEdit = function () {
        if ($scope.Email && $scope.Senha && $scope.ConfirmaSenha && $scope.NivelAcesso) {
            $scope.Usuario = {
                "Id": $scope.Id,
                "Nome": $scope.Nome,
                "Sobrenome": $scope.Sobrenome,
                "Email": $scope.Email,
                "Senha": $scope.Senha,
                "ConfirmaSenha": $scope.ConfirmaSenha,
                "NivelAcesso": $scope.NivelAcesso
            }
            $http.put('http://localhost:58969/api/Usuario', $scope.Usuario).
                success(function (data, status, headers, config) {
                    alert('Usuário editado com sucesso!');
                }).
                error(function (data, status, headers, config) {
                    //alert("Não foi possível editar este usuário!");
                });
        }
    };

    // Envia requisição para DELETAR um usuário da base de dados
    $scope.submitDelete = function () {
        $http.delete('http://localhost:58969/api/Usuario', $scope.Id).
            success(function (data, status, headers, config) {
                alert('Usuário deletado com sucesso!');
            }).
            error(function (data, status, headers, config) {
                //alert("Não foi possível excluir este usuário!");
            });
    };

});