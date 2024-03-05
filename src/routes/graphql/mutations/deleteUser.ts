import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';

import { Context } from '../gqlContext.js';

import { UUIDType } from '../types/main.js';

export const deleteUser: GraphQLFieldConfig<void, Context> = {
  type: new GraphQLNonNull(UUIDType),
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_src, args, context) => {
    const user = await context.prisma.user.delete({ where: { id: args.id } });
    return user.id;
  },
};
