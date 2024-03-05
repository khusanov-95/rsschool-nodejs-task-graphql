import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';

import { Context } from '../gqlContext.js';

import { UUIDType } from '../types/main.js';

export const unsubscribeFrom: GraphQLFieldConfig<void, Context> = {
  type: UUIDType,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) },
  },

  resolve: async (_src, args, context) => {
    const result = await context.prisma.subscribersOnAuthors.delete({
      where: {
        subscriberId_authorId: {
          subscriberId: args.userId,
          authorId: args.authorId,
        },
      },
    });

    return result.authorId;
  },
};
