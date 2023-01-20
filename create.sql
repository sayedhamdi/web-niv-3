create table airports  (
    id integer primary key autoincrement,
    code text,
    city text
);
create table  people (
    id integer primary key autoincrement,
    first text,
    last text
);

create table  flights (
    id integer primary key autoincrement,
    origin_id integer,
    destination_id integer,
    duration integer,
    FOREIGN KEY(origin_id) references airports(id), 
    FOREIGN KEY(destination_id) references airports(id)
);

create table passengers (
    id integer primary key autoincrement,
    person_id integer,
    flight_id integer,
    FOREIGN KEY(person_id) references people(id), 
    FOREIGN KEY(flight_id) references flights(id)
);

