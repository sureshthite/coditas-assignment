import RequestHandler from '../helpers/RequestHandler';

export function getUsers(user) {
  // let url = 'https://api.github.com/search/users?q='+user;
  return RequestHandler.get(`/search/users?q=${user}`)
}

export function getUserRepoDetails(loginID) {
  return RequestHandler.get(`/users/${loginID}/repos`)
}
