Feature: Acesso cadastro Saraiva

        Background: Como a pessoa física gostaria de realizar o cadastro na loja
                                    
        @testeum
        Scenario Outline: Visualizar opção de cadastrar
            Given Eu como pessoa física acesso o site saraiva
              And quero cadastrar no site
             When acesso a pagina de cadastro
             Then devo visualizar campos <nome>, <sobrenome>, <e-mail>, <senha>, <confirmar>, <CPF>, <sexo>, <nascimento>, <celular>, <endereco>, <contato>

        Examples:
                  | nome  | sobrenome | e-mail                | senha  | confirmar | CPF         | sexo | nascimento | celular    | endereco | contato    |
                  | Tonho | da Lua    | betosacolas@gmail.com | 696260 | 696260    | 00205618065 | m    | 25/12/1999 | 1199999999 | 88060380 | 4869696666 |

        Scenario: Os campos obrigatórios precisam ser sinalizados
              And visualizo as cores preto e amarelo
             When rolo scroll
              And campos obrigatórios precisam ser sinalizados com um asterisco vermelho
             Then deve ser possível aceitar ou não o recebimento de ofertas e isso deverá ser feito através de um radio button apresentando as duas opções na tela
             
        @testedois
        Scenario: Ao lado da opção de livro físico gostaria de ter a nova opção
              And Desejo ter as descrições e características do produto
             When Tento adicionar produtos físicos e digitais
             Then Verifico que não é possível adicionar produtos físicos e digitais no mesmo carrinho
