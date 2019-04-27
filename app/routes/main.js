import Route from '@ember/routing/route';

export default class TeamRoute extends Route {
  model({team_id} ) {
    // Users can drag them to one of the columns
    return this.store.query('behaviour', {query: ref => ref.orderByChild('team').equalTo(Number(team_id)) })
  }
}
//todo: make the behaviour save after moving.
//todo: create a results page
//todo: styling tidy
