import { environment } from './environments/environment';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: { hello: () => 'world' }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(3000).then(() => console.log('Server started'));
