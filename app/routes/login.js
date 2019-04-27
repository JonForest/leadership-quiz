import Route from '@ember/routing/route';

export default class Login extends Route {
  model() {
    return [
      {name: "Team Barack", id: 1, image: 'images/barack.png'},
      {name: "Team Jacinda", id: 2, image: 'images/jacinda.jpg'},
      {name: "Team Jobs", id: 3, image: 'images/jobs.jpeg'},
      {name: "Team Brené", id: 4, image: 'images/bbrown.jpg'},
    ]
  }
}
