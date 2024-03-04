import {
  Kind,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLScalarType,
} from 'graphql';

enum MemberTypeId {
  BASIC = 'basic',
  BUSINESS = 'business',
}

const MemberTypeIdType = new GraphQLScalarType({
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

function isMemberTypeId(value: unknown): value is MemberTypeId {
  return value === MemberTypeId.BASIC || value === MemberTypeId.BUSINESS;
}

export const member = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: MemberTypeIdType },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
});
