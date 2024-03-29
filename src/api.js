//Base URL
const base_url =
  "https://api.rawg.io/api/games?key=e5c2d97fe2214566b68d6017a6db720b&";
const detail_url = "https://api.rawg.io/api/games";
const API_KEY = "e5c2d97fe2214566b68d6017a6db720b";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${detail_url}/${game_id}?key=e5c2d97fe2214566b68d6017a6db720b`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${detail_url}/${game_id}/screenshots?key=e5c2d97fe2214566b68d6017a6db720b`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
