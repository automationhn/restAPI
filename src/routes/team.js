import uuidv4 from 'uuid/v4';
import sql from 'mssql';
import { Router } from 'express';
import { teams, scrum_master_by_team, features, velocities } from '../models/teamData'

const router = Router();
  // config for your database
const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: 'localhost', 
    database: 'companyDB' 
};

router.get('/', (req, res) => {
  return res.send(Object.values(teams));
});

router.get('/getTeamNames', (req, res) => {
  const teamNames = teams.map(e => e.name);
  return res.send(Object.values(teamNames));
});

router.get('/getTeamById/:id', (req, res) => {
  const teamId = parseInt(req.params.id);
  const team = teams.find(e => e.id === teamId);
  return res.send(team);
});

router.get('/v2', async function (req, res) {
  // connect to your database
  let pool = await sql.connect(config);

  const queryTeam = "select t.id,t.team_number, t.name, m.first_name + ' ' + m.last_name as dev_lead, m1.first_name + ' ' + m1.last_name as qa_lead"
  + " from team as t"
  + " JOIN member as m on t.dev_lead_id = m.id"
  + " JOIN member as m1 on t.qa_lead_id = m1.id";
  const { recordset: teams } = await pool.request().query(queryTeam);

  const queryTeamMember = "select m.id as member_id,m.first_name, m.last_name, t.name, t.id as team_id from member m"
  + " join member_by_team mbt on m.id = mbt.member_id"
  + " join team t on t.id = mbt.team_id";

  const { recordset: teamMember } = await pool.request().query(queryTeamMember);

  const result = teams.map((team) => {
    const memberByTeam = teamMember.filter(m => m.team_id == team.id);
    return { ...team, members: memberByTeam.map(m => `${m.first_name} ${m.last_name}`) }
  });
  return res.send(result);
});

router.get('/getMembers1', function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
      if (err) {
        console.log(err);
      }

      var request = new sql.Request();   
      // query to the database and get the records
      let data;
      request.query('select * from member', function (err, recordset) {
          if (err) {
            console.log(err);
          }
          // send records as a response
          res.send(recordset);
          // data = recordset;
      });
      // res.send(data);

  });
});

// router.post('/', (req, res) => {
//   const id = uuidv4();
//   const message = {
//     id,
//     text: req.body.text,
//     userId: req.context.me.id,
//   };

//   req.context.models.messages[id] = message;

//   return res.send(message);
// });

// router.delete('/:messageId', (req, res) => {
//   const {
//     [req.params.messageId]: message,
//     ...otherMessages
//   } = req.context.models.messages;

//   req.context.models.messages = otherMessages;

//   return res.send(message);
// });

export default router;
