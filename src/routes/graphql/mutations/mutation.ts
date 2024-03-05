import { GraphQLObjectType } from 'graphql';

import {
  createUser,
  changeUser,
  deleteUser,
  createProfile,
  changeProfile,
  deleteProfile,
  createPost,
  changePost,
  deletePost,
  subscribeTo,
  unsubscribeFrom,
} from './main.js';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser,
    changeUser,
    deleteUser,
    createProfile,
    changeProfile,
    deleteProfile,
    createPost,
    changePost,
    deletePost,
    subscribeTo,
    unsubscribeFrom,
  }),
});
