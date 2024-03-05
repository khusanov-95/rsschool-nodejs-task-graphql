import { GraphQLObjectType } from 'graphql';

import {
  memberType,
  memberTypes,
  post,
  posts,
  user,
  users,
  profile,
  profiles,
} from './main.js';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    memberType,
    memberTypes,
    post,
    posts,
    user,
    users,
    profile,
    profiles,
  }),
});
