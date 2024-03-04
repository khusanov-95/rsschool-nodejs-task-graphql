import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from 'graphql';
import { Context } from '../gqlContext.js';
import { memberType, memberTypeId } from '../types/index.js';

export const member: GraphQLFieldConfig<void, Context> = {
  type: memberType,
  args: { id: { type: new GraphQLNonNull(memberTypeId) } },
  resolve: (_source, args, context) =>
    context.prisma.memberType.findUnique({ where: { id: args.id } }),
};

export const members: GraphQLFieldConfig<void, Context, void> = {
  type: new GraphQLNonNull(new GraphQLList(memberType)),
  resolve: (_src, _, context) => context.prisma.memberType.findMany(),
};
