import { GraphQLFieldConfig, GraphQLList, GraphQLNonNull } from 'graphql';
import { Context } from '../gqlContext.js';
import { MemberType, MemberTypeId } from '../types/main.js';

export const member: GraphQLFieldConfig<void, Context> = {
  type: MemberType,
  args: { id: { type: new GraphQLNonNull(MemberTypeId) } },
  resolve: (_source, args, context) =>
    context.prisma.memberType.findUnique({ where: { id: args.id } }),
};

export const members: GraphQLFieldConfig<void, Context, void> = {
  type: new GraphQLNonNull(new GraphQLList(MemberType)),
  resolve: (_src, _, context) => context.prisma.memberType.findMany(),
};
