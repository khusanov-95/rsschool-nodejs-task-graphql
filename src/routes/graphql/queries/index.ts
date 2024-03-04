import { GraphQLObjectType } from 'graphql';

import { member, members } from './member.js';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    member,
    members,
  }),
});
