import DS from 'ember-data';
const { Model, attr } = DS;

export default class BehaviourModel extends Model {
  @attr() description;
  @attr('string', {defaultValue: 'unallocated'}) list;
  @attr('number') team;
}
