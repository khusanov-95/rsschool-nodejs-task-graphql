import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from 'graphql';
import { Context } from '../gqlContext.js';
import { PostType, UUIDType } from '../types/main.js';

export const post: GraphQLFieldConfig<void, Context> = {
  type: PostType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: (_src, args, context) =>
    context.prisma.post.findUnique({ where: { id: args.id } }),
};

export const posts: GraphQLFieldConfig<void, Context, void> = {
  type: new GraphQLNonNull(new GraphQLList(PostType)),
  resolve: (_src, _, context) => context.prisma.post.findMany(),
};
