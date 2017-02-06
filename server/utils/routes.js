import { passport, login, register, logout } from './authentication';
import { postBill, getOwnBills, getAllUsers, getFriends, addFriend, removeFriend } from '../db/controllers';

export default function routes(app, express) {
  app.post('/auth/register', register, passport.authenticate('local'), login);
  app.post('/auth/login', passport.authenticate('local'), login);
  app.post('/auth/logout', logout);

  app.post('/bills', postBill);
  app.get('/bills', getOwnBills); 

  app.get('/users', getAllUsers); // to use when adding friends
  app.get('/me/friends', getFriends);
  app.post('/me/friends', addFriend);
  app.post('/me/friends/remove', removeFriend);

  /*
  Possible endpoints:
  /me --> get own bills (and debts and debtors) 
  */

}
