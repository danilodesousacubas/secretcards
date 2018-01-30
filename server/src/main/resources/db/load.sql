insert into card (id,description,title) values (nextval('seq_card'), 'foreach functional labmda','node');
insert into card (id,description,title) values (nextval('seq_card'), 'select com in', 'HQL');

insert into tag (id,name) values (nextval('seq_tag'),'developing');
insert into tag (id,name) values (nextval('seq_tag'),'JAVA');

insert into cards_tags (card_id, tags_id) values (1,1);
insert into cards_tags (card_id, tags_id) values (2,1);
insert into cards_tags (card_id, tags_id) values (2,2);

insert into tag (id,name) values (nextval('seq_tag'),'Aula 30');
insert into tag (id,name) values (nextval('seq_tag'),'Classifição de Palavras');