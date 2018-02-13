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








INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-1', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.510', 1, 'EXECUTED', '7:095cd01658c18ec1460cfd90291afd5d', 'createSequence sequenceName=seq_card', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-2', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.559', 2, 'EXECUTED', '7:767bfd3519879de46bd5e304af437a30', 'createSequence sequenceName=seq_tag', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-3', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.594', 3, 'EXECUTED', '7:1531a5e4440da0dc2c09db01b2105ee9', 'createTable tableName=card', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-4', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.611', 4, 'EXECUTED', '7:a45d618077166515f0273cadeabbbf0e', 'createTable tableName=cards_tags', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-5', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.628', 5, 'EXECUTED', '7:9e0bd77c17b8b77d1bf9d2a6b9ab8b2b', 'createTable tableName=tag', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-6', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.663', 6, 'EXECUTED', '7:796950f4e99241fa54864675f782238e', 'addPrimaryKey constraintName=card_pkey, tableName=card', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-7', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.714', 7, 'EXECUTED', '7:6d1647fdc4662b1af1df98d3ebdb55f3', 'addPrimaryKey constraintName=cards_tags_pkey, tableName=cards_tags', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-8', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.832', 8, 'EXECUTED', '7:f7fed41b485e3ccf42a788806021690d', 'addPrimaryKey constraintName=tag_pkey, tableName=tag', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-9', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.883', 9, 'EXECUTED', '7:2914f04ca8b8fa03b1d99aa61bf1bbbb', 'addUniqueConstraint constraintName=uk1wdpsed5kna2y38hnbgrnhi5b, tableName=tag', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-10', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.900', 10, 'EXECUTED', '7:b22ae2cc5d904b8269ab3ac442eb137a', 'addForeignKeyConstraint baseTableName=cards_tags, constraintName=fkksn21skryfmh8v4idy5xpbb2n, referencedTableName=tag', '', NULL, '3.5.3', NULL, NULL, '8558549478');
INSERT INTO public.databasechangelog
(id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id)
VALUES('1518556636841-11', 'dssousa', 'classpath:db/changelog/initial.xml', '2018-02-13 19:49:09.917', 11, 'EXECUTED', '7:09b408ae79ce9598807b1e73a17f0993', 'addForeignKeyConstraint baseTableName=cards_tags, constraintName=fktmcd2739b1wg05yfue0q1v9tl, referencedTableName=card', '', NULL, '3.5.3', NULL, NULL, '8558549478');

