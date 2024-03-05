import { GraphQLFieldConfig, GraphQLNonNull } from 'graphql';

import { Context } from '../gqlContext.js';

import { UUIDType } from '../types/main.js';

export const deleteProfile: GraphQLFieldConfig<void, Context> = {
  type: new GraphQLNonNull(UUIDType),
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_src, args, context) => {
    const profile = await context.prisma.profile.delete({ where: { id: args.id } });
    return profile.id;
  },
};
