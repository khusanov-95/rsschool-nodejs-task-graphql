import { GraphQLObjectType } from 'graphql';

import { member, members } from './member.js';
import { post, posts } from './post.js';
import { profile, profiles } from './profile.js';
import { user, users } from './user.js';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    member,
    members,
    post,
    posts,
    profile,
    profiles,
    user,
    users,
  }),
});
