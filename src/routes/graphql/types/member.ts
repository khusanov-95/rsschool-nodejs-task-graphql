import {
  Kind,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLScalarType,
} from 'graphql';

enum memberTypeId {
  BASIC = 'basic',
  BUSINESS = 'business',
}

export const MemberTypeId = new GraphQLScalarType({
  name: 'MemberTypeId',
  serialize(value) {
    if (!isMemberTypeId(value)) {
      throw new TypeError('Invalid MemberTypeId');
    }
    return value;
  },
  parseValue(value) {
    if (!isMemberTypeId(value)) {
      throw new TypeError('Invalid MemberTypeId');
    }
    return value;
  },
  parseLiteral(valueNode) {
    if (valueNode.kind === Kind.STRING && isMemberTypeId(valueNode.value)) {
      return valueNode.value;
    }
  },
});

function isMemberTypeId(value: unknown): value is memberTypeId {
  return value === memberTypeId.BASIC || value === memberTypeId.BUSINESS;
}

export const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: MemberTypeId },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
});
