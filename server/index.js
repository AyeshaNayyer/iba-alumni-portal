const express = require ('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const db = require('./models')

//Routers
const usersrouter = require ('./routes/usersrouter')
const fyprouter = require('./routes/fyprouter'); // Import the fyp router
const programrouter = require('./routes/programrouter');
const fundraisingrouter = require('./routes/fundraisingrouter');
const alumnirouter = require('./routes/alumnirouter'); // Import the fundraising router
const alumniSearchRouter = require('./routes/searchrouter');
const alumni_historyRouter = require('./routes/alumni_historyrouter');
const companyRouter = require('./routes/companyrouter');
const eventsRouter = require('./routes/eventsrouter');
const jobsrouter = require('./routes/jobsrouter');
const jobskillrouter = require('./routes/job-skillrouter');




app.use('/auth',usersrouter);
app.use('/alumniauth',alumnirouter);
app.use('/fyp', fyprouter); 
app.use('/program', programrouter);
app.use('/fundraising', fundraisingrouter); // Use the fundraising router
app.use('/alumni', alumniSearchRouter);
app.use('/alumni_history', alumni_historyRouter);
app.use('/company', companyRouter);
app.use('/events', eventsRouter);
app.use('/jobs', jobsrouter);
app.use('/jobskill', jobskillrouter);


db.sequelize.sync().then(() =>{
    app.listen(3001,() =>{
        console.log('Server running  on port 3001')
        });
        
})


