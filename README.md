#### Techs:
 - Java 1.8
 - Spring-boot 1.5.4 
 - Angular 5
 - Docker 1.18
 - Ionic 3
 - Postgres (heroku postgres)
 - Node v7.10.1
 
#### install server
mvn clean install -U

#### run
mvn spring-boot:run

#### install front-end project => frontend/src/main/frontend
npm install

##### run
npm start

#### create image docker
sudo mvn -U dockerfile:build

#### run
sudo docker compose up -d

#### run mobile
ionic serve --lab dock

#### Utils commands

#### Heroku
 - heroku logs --tail --app appname
 - heroku pg:backups capture --app secretcards
 - heroku pg:backups:download --app secretcards
 
  - pg_restore --verbose --clean --jobs=4 --disable-triggers --no-acl --no-owner -h localhost -U user_name -d last.dump


#### Docker
 - sudo docker run -p 8080:8080 -t sec-dock/server HOSTS="172.17.0.1 localhost"
 - sudo docker run --name some-postgres -e POSTGRES_PASSWORD=postgres -d postgres:9.5
 - sudo docker rmi -f imagem
 - docker images
 - docker ps 
 - docker stop <nome da imagem>	
 - sudo docker-compose -f docker-compose.yaml up
 - sudo docker-compose -f docker-compose.yaml down
 
#### liquibase
 - mvn liquibase:generateChangeLog \ 
      -Dliquibase.url=jdbc:postgresql://localhost:5432/cards -Dliquibase.outputChangeLogFile=src/main/resources/db/changelog/db.changelog-master-reverse.xml -Dliquibase.username=postgres -Dliquibase.password=postgres -Dliquibase.changeSetAuthor=dssousa 
 
 
- mvn liquibase:updateSQL -Dliquibase.contexts=les -Dliquibase.url=jdbc:postgresql://localhost:5432/cards -Dliquibase.changeLogFile="src/main/resources/db/changelog/db.changelog-diff-13-02-2018.xml" -Dliquibase.username="postgres" -Dliquibase.password="postgres"

##### configure bd-cli
 -bdname?sslmode=require

 
 
 
 
 
 