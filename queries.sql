/* select flights */


SELECT 
   flights.id as id,
   origin.city AS origin,
   destination.city AS destination,
   flights.duration
FROM 
    flights
INNER JOIN 
    airports origin ON (origin.id = flights.origin_id)
INNER JOIN 
    airports destination ON (destination.id = flights.destination_id);

/* select flights by id */


SELECT 
   flights.id as id,
   origin.city AS origin,
   origin.code AS origin_code,
   destination.city AS destination,
   destination.code As destination_code,
   flights.duration
FROM 
    flights
INNER JOIN 
    airports origin ON (origin.id = flights.origin_id)
INNER JOIN 
    airports destination ON (destination.id = flights.destination_id)

WHERE flights.id = id;





SELECT 
    p.first || ' ' || p.last AS name
FROM 
    passengers
INNER JOIN 
    people p ON (p.id = passengers.person_id)
WHERE passengers.flight_id = id;



SELECT 
    people.first || ' ' || people.last AS name
FROM 
    people
INNER JOIN 
    passengers p ON (people.id != p.person_id)
WHERE p.flight_id = id;


SELECT people.id 
FROM people
EXCEPT 
SELECT person_id FROM passengers WHERE flight_id = id; 


SELECT people.first || ' ' || people.last AS name
  FROM people
 WHERE people.id NOT IN (SELECT person_id
                 FROM passengers
                 WHERE passengers.flight_id = id);