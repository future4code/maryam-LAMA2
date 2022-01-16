# Labenu Music Awards

## Explicação do projeto:
https://labenu.notion.site/WFS11-S20-LAMA-7a971f9d0f1143429104c9598a0c9273

## Documentação da API:
https://documenter.getpostman.com/view/17589027/UVXkmZq2

### Projeto:

Como você deve saber muito bem, o nosso querido chefinho Astrodev é uma pessoa com Networking incrível e ele conhece vários artistas estrelados. Além disso, ele também é um grande ~~megalomaníaco~~ visionário e está planejando fazer um grande evento: o **LAMA**, *Labenu Musical Awards*, um festival  com várias bandas famosas para a formatura da sua turma e, no final, vocês podem eleger a banda que mais gostaram! Entretanto, na opinião dele, vocês só serão merecedores se entregarem um sistema impecável que permita o gerenciamento completo desses shows.

O festival terá duração fixa de 3 dias (sexta, sábado e domingo), começando sempre as 08h e acabando as 23h, totalizando 15h de show a cada dia. As funcionalidades básicas do projeto devem ser:

- 1. Cadastro
    
    O nosso sistema deve permitir o registro os usuários que irão usá-lo. Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. Você pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro. Caso tenha interesse, tente tornar o código de cadastro mais testável utilizando a inversão de dependência.
    
- 2. Login
    
    Para realizar o login, basta informar seu e-mail e a sua senha. O retorno deve conter o token de autenticação do usuário. Caso tenha interesse, tente tornar o código de cadastro mais testável utilizando a inversão de dependência.
    
- 3. Endpoint de registrar banda
    
    O nosso sistema deve deixar registrado todas as bandas que participarão dos três dias de shows. Para uma banda ser criada, precisamos das informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. **Somente administradores** podem registrar bandas. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de acerto.
    
- 4. Endpoint de visualização de detalhes sobre a banda
    
    Esse endpoint deve receber o id **ou** o nome da banda e retornar as todas as informações salvas sobre ela.
    
- 5. Endpoint de adicionar um show a um dia
    
    Para cadastrar um show, o endpoint precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Deve haver uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Além disso os shows só podem ser marcados em horários redondos, ou seja, pode ser 08h - 09h ou 09h - 13h mas não pode ser 09h - 10h30 ou 10h30 - 14h.
    
    Caso já exista um show marcado para o dia e o horário em questão, o seu endpoint deve retornar um erro. Faça ao menos dois testes para checar se os dados estão corretos, sendo um em caso de erro e outro em caso de show em data repetida.
    
- 6. Endpoint de pegar todos os shows de uma data
    
    Recebe um dia (sexta, sábado ou domingo) e retorna todos os shows daquela data (ordenados pelo horário), mostrando somente o nome da banda e o gênero musical principal.
    
### Integrantes:

- Murilo Terenciani Carolino
- Lucas Homero Sabino
- Sarah Romanhol Falconiere 

### Tecnologias utilizadas:

→ NodetJS
→ Express
→ Knex
→ MySQL
→ Typescript
→ JSON
→ Heroku
→ bcryptjs
→ jsonwebtoken
→ uuid
