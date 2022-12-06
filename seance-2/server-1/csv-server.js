const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'users.csv',
    header: [
        {id: 'firstname', title: 'FIRSTNAME'},
        {id: 'lastname', title: 'LASTNAME'},
        {id: 'age', title: 'AGE'},
        {id : 'email' , title: 'EMAIL'}
    ]
});

const data = [
    {firstname: 'hsan',  lastname : 'barka', age : 70, email : 'hsan.barka70@gmail.com' },
];


csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });