#Techs:

 - Java 8, - Spring-boot - Angular 4 - Docker and Docker-compose - Postgres 
 
#install/run server spring-boot app:

mvn clean install -U

mvn spring:boot:run

#run front-end project

npm install
npm start

#install/run project with docker:

#### Create jar
mvn clean install -U

#### create image docker
sudo mvn -U dockerfile:build

#### run docker
sudo docker run -p 8080:8080 -t sec-dock/server HOSTS="172.17.0.1 localhost"

#### remove image docker
sudo docker rmi -f 2b0fa535477c (se ja houver criado a imagem)

### Utils commands

 - docker images
 - docker ps <use -a for show all instances docker>
 - docker-compose up -d
 - docker stop <nome da imagem>	
 - docker rmi -f <nome_imagem>  
 
##### run postgres docker 
sudo docker run --name some-postgres -e POSTGRES_PASSWORD=postgres -d postgres:9.5  

sudo docker run -p 8080:8080 -t --name tomcat --link postgresql:postgresql  sec-dock/server 





heroku logs --app secretcards



