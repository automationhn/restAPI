import uuidv4 from 'uuid/v4';
import { Router } from 'express';
import { teams, scrum_master_by_team, features, velocities } from '../models/teamData'

const router = Router();

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
