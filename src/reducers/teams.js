import Team from '../Models/Team';

import {ADD_TEAM} from '../Constants';

export const teams = (state = [
  new Team("Arsenal", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Arsenal-FC-icon.png'),
  new Team("Aston Villa", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Aston-Villa-icon.png'),
  new Team("Blackpool", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Blackpool-FC-icon.png'),
  new Team("Bolton", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Bolton-Wanderers-icon.png'),
  new Team("Chelsea", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Chelsea-FC-icon.png'),
  new Team("Newcastle Utd.", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Newcastle-United-icon.png'),
  new Team("Manchester Utd.", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Manchester-United-icon.png'),
  new Team("Tottenham Hotspur", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Tottenham-Hotspur-icon.png'),
  new Team("Liverpool FC", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Liverpool-FC-icon.png'),
  
  new Team("Manchester City", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Manchester-City-icon.png'),
  
  new Team("West Ham United", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/West-Ham-United-icon.png'),
  new Team("Wolverhampton", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Wolverhampton-Wanderers-icon.png'),
  new Team("Watford", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Watford-FC-icon.png'),
  new Team("Swansea City", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Swansea-City-icon.png'),
  new Team("Middlesbrough", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Middlesbrough-FC-icon.png'),
  new Team("Leeds United", 'https://icons.iconarchive.com/icons/giannis-zographos/english-football-club/32/Leeds-United-icon.png'),
  
 
 
  
], action) => {

  switch(action.type) {

    case ADD_TEAM:
      var team = action.team;
      var teams = [...state];
      teams.push(team);
      return teams;

    default:
        return state
  }

}
