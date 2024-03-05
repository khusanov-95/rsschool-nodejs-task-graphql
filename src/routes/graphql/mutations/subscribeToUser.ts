import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from 'graphql';

import { Context } from '../gqlContext.js';

import { UserType, UUIDType } from '../types/main.js';

export const subscribeTo: GraphQLFieldConfig<void, Context> = {
  type: UserType as GraphQLObjectType,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },

  resolve: (_src, args, context) => {
    const result = context.prisma.user.update({
      where: {
        id: args.userId,
      },
      data: {
        userSubscribedTo: {
          create: {
            authorId: args.authorId,
          },
        },
      },
    });

    return result;
  },
};
