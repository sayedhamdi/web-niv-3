
insert into people (first, last) values ('Hsan', 'Doe');
insert into people (first, last) values ('Kamel', 'Doe');
insert into people (first, last) values ('Aziz', 'Doe');
insert into people (first, last) values ('Samir', 'Doe');

insert into airports (code, city) values ('LAX', 'Los Angeles');
insert into airports (code, city) values ('JFK', 'New York');
insert into airports (code, city) values ('SFO', 'San Francisco');
insert into airports (code, city) values ('MIA', 'Miami');


insert into flights (origin_id, destination_id, duration) values (1, 2, 415);
insert into flights (origin_id, destination_id, duration) values (1, 3, 380);
insert into flights (origin_id, destination_id, duration) values (1, 4, 360);
insert into flights (origin_id, destination_id, duration) values (2, 1, 415);
insert into flights (origin_id, destination_id, duration) values (2, 3, 120);

insert into passengers (person_id, flight_id) values (1, 1);
insert into passengers (person_id, flight_id) values (1, 2);
insert into passengers (person_id, flight_id) values (1, 3);
insert into passengers (person_id, flight_id) values (2, 1);


