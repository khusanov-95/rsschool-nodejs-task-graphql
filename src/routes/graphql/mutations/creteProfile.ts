import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import { Context } from '../gqlContext.js';

import { UUIDType, MemberTypeId, ProfileType } from '../types/main.js';

const CreateProfileInputType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberTypeId: { type: new GraphQLNonNull(MemberTypeId) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
  }),
});

export const createProfile: GraphQLFieldConfig<void, Context> = {
  type: ProfileType,
  args: { dto: { type: new GraphQLNonNull(CreateProfileInputType) } },
  resolve: (_src, args, context) => context.prisma.profile.create({ data: args.dto }),
};
