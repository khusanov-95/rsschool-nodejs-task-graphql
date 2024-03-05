import {
  GraphQLFieldConfig,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { Context } from '../gqlContext.js';

import { UUIDType, UserType } from '../types/main.js';

const ChangeUserInputType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: () => ({
    name: { type: GraphQLString },
    balance: { type: GraphQLInt },
  }),
});

export const changeUser: GraphQLFieldConfig<void, Context> = {
  type: UserType as GraphQLObjectType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeUserInputType) },
  },
  resolve: (_src, args, context) =>
    context.prisma.user.update({ where: { id: args.id }, data: args.dto }),
};
