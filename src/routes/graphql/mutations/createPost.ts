import {
  GraphQLFieldConfig,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { Context } from '../gqlContext.js';

import { PostType, UUIDType } from '../types/main.js';

const CreatePostInputType = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    authorId: { type: new GraphQLNonNull(UUIDType) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const createPost: GraphQLFieldConfig<void, Context> = {
  type: PostType,
  args: { dto: { type: new GraphQLNonNull(CreatePostInputType) } },
  resolve: (_src, args, context) => context.prisma.post.create({ data: args.dto }),
};
