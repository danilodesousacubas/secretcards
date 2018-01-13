#### Techs:
 - Java
 - Spring-boot 
 - Angular 
 - Docker
 - Ionic
 - Postgres 
 
#### install server
mvn clean install -U

#### run
mvn spring:boot:run

#### install front-end project => frontend/src/main/frontend
npm install

##### run
npm start

#### create image docker
sudo mvn -U dockerfile:build

#### run
sudo docker compose up -d

#### run mobile
ionic serve --lab










#### utils commands
 - sudo docker run -p 8080:8080 -t sec-dock/server HOSTS="172.17.0.1 localhost"
 - sudo docker run --name some-postgres -e POSTGRES_PASSWORD=postgres -d postgres:9.5
 - sudo docker rmi -f imagem
 - docker images
 - docker ps 
 - docker stop <nome da imagem>	
 - heroku logs --tail --app appname
 
- sudo docker-compose -f docker-compose.yaml up
- sudo docker-compose -f docker-compose.yaml down

 