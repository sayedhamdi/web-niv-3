let getFlightsWithDetails = `SELECT 
flights.id as id,
origin.city AS origin,
destination.city AS destination,
flights.duration
FROM 
 flights
INNER JOIN 
 airports origin ON (origin.id = flights.origin_id)
INNER JOIN 
 airports destination ON (destination.id = flights.destination_id);`;


 let getFlightById = (id)=>`
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

WHERE flights.id = ${id};
 `;


 let getPassengersByFlightId = (id)=>`
    SELECT 
        p.first || ' ' || p.last AS name
    FROM 
        passengers
    INNER JOIN 
        people p ON (p.id = passengers.person_id)
    WHERE passengers.flight_id = ${id};
 `
 let getNotPassengers = (id)=>`
    SELECT 
        p.first || ' ' || p.last AS name
    FROM 
        passengers
    INNER JOIN 
        people p ON (p.id = passengers.person_id)
    WHERE passengers.flight_id != ${id};
 `

module.exports = {
    getFlightsWithDetails,
    getFlightById,
    getPassengersByFlightId,
    getNotPassengers
}