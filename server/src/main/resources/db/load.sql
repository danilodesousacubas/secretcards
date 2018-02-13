insert into card (id,description,title) values (nextval('seq_card'), 'foreach functional labmda','node');
insert into card (id,description,title) values (nextval('seq_card'), 'select com in', 'HQL');

insert into tag (id,name) values (nextval('seq_tag'),'developing');
insert into tag (id,name) values (nextval('seq_tag'),'JAVA');

insert into cards_tags (card_id, tags_id) values (1,1);
insert into cards_tags (card_id, tags_id) values (2,1);
insert into cards_tags (card_id, tags_id) values (2,2);

insert into tag (id,name) values (nextval('seq_tag'),'Aula 30');
insert into tag (id,name) values (nextval('seq_tag'),'Classifição de Palavras');

drop schema public cascade;
drop database cards;

drop table card cascade;
drop table public.tag cascade;
drop table public.cards_tags cascade;
drop table public.databasechangelog cascade;
drop table public.users cascade;
drop table public.databasechangeloglock cascade;

drop sequence public.seq_card;
drop sequence public.seq_tag;
drop sequence public.seq_user;