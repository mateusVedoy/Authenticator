# Authenticator
Simple lesson of auth with node TS, ports and adapters arch, postgres and docker

### Dicas para configurar o banco de dados
1. host: localhost
2. port: 4321
3. database: authenticator
4. username: authenticator
5. pass: authenticator

### Dicas para configurar o REST Client
Dentro do projeto há o arquivo RESTClient_insomnia. Basta importá-lo para dentro da ferramenta.

### Entenda o fluxo
Neste pequeno projeto é possível verificar um cadastro de usuário por username, bem como cadastrar novos usuário ou gerar autenticação deste. Tudo isso para podermos acessar uma rota privada que depende de um token de acesso.

### Casos de uso
1. Criar usuário
2. Encontrar usuário por username
3. Autenticar
4. Validar autenticidade para acessar rota segura
