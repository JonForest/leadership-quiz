import Route from '@ember/routing/route';

export default class Login extends Route {
  model() {
    return [
      {name: "Team 1", id: 1},
      {name: "Team 2", id: 1},
      {name: "Team 3", id: 1},
      {name: "Team 4", id: 1},
    ]
  }
}
