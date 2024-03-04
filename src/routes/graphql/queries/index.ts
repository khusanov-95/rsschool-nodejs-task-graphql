import { GraphQLObjectType } from 'graphql';

import { member } from '../types/index.js';

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    member,
  }),
});
