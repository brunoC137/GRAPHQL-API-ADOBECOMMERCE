Esse repositorio possui o intuito de acerelar e auxiliar o processo de criação de testes automatizados de API via Newman.
Após baixar os arquivos desse repositorio, para instalar as dependencias é necessario seguir os seguintes passos:
    Atualizar alguns campos necessarios para os testes com os dados de seu ambiente, esses dados são "url", "usermail", "userpass", esses campos são encontrados no arquivo environment/Native-environment.json

    Caso deseje utilizar seu proprio ambiente e collection, deve ser atualizado também o arquivo package.json, de forma que o script native_apis siga o modelo atual, apenas alterando o nome do ambiente e o nome da collection 

    Rodar o comando ./Scripts/install-newman.sh (Obs, nesse arquivo a instalação é realizada via "sudo", caso não deseje instalar dessa forma, instale manualmente as dependencias necessarias.)
    
    Após rodar o comando acima, além de instalar as dependencias, já iremos obter o primeiro report dos testes, esse irá ser armazenado dentro da pasta "newman".

    Para rodar apenas os testes é necessario rodar o comando: "npm run native_apis environment/Native-environment.json 2>/dev/null || true" (Caso tenha-se mudado o ambiente ou a collecetion, devemos substituir também nesse comando)

Possuimos também a opção de rodarmos os testes via Docker e armazenarmos os reports em buckets s3, para tanto é necessario seguir os seguintes passos:

    Para o controle da AWS via CLI é necessario as chaves de acessos da conta, logo essas devem ser salvas como variaveis de ambiente (Com os nomes de acordo com o script citado a seguir), ou alteradas no Script ./Scripts/dockerScript.sh de forma que o Script utilize os dados de acesso corretos.
    
    Uma vez com os dados de acesso configurados, deve-se apenas rodar o script ./Scripts/dockerScript.sh, esse que irá criar uma imagem, instalar as dependencias, rodar os testes, e subir os mesmos para dois buckets, um contendo todos os testes realizados, e outro contendo apenas o teste mais recente.
