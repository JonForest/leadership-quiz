import Route from '@ember/routing/route';

export default class TeamRoute extends Route {
  model({team_id}) {
    // Users can drag them to one of the columns
    return [
      {description: "Behaviour 1", id: 1},
      {description: "Behaviour 2", id: 2},
      {description: "Behaviour 3", id: 3},
      {description: "Behaviour 4", id: 4},
      {description: "Behaviour 5", id: 5},
      {description: "Behaviour 6", id: 6},
      {description: "Behaviour 7", id: 7},
      {description: "Behaviour 8", id: 8},
      {description: "Behaviour 9", id: 9},
      {description: "Behaviour 10", id: 10}
    ].map(behaviour => this.store.createRecord('behaviour', behaviour))

  }
}
