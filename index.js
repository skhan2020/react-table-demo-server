const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Nutrition { 
    calories: Int!
    carbs: Int!
    fat: Int!
    protein: Int!
  }
  type Dessert {
    id: ID!
    name: String!
    nutrition: Nutrition!
  }
  input NutritionInput { 
    calories: Int!
    carbs: Int!
    fat: Int!
    protein: Int!
  }
  input DessertInput { 
    name: String!
  }
  type Query {
    dessertList: [Dessert!]
  }
  type Mutation {
    addDessert(dessertInput: DessertInput!, nutritionInput: NutritionInput!): Dessert!
    deleteDesserts(dessertIds: [Int]): [Int]!
  }
`;

const resolvers = {
  Mutation: {
      addDessert: () =>  ({
        id: 21323,
        name: "Candy",
        nutrition: {
            calories: 437,
            fat: 18,
            carbs: 63,   
            protein: 4,
        }
    }),
    deleteDesserts: () =>  (
      [12,33,2,33]
    ),
  },
  Query: {
    dessertList: () =>  [ {
      id: 21323,
      name: "Oreo",
      nutrition: {
          calories: 437,
          fat: 18,
          carbs: 63,   
          protein: 4,
      }
  },
  {   
      name: "Nougat",
      id: 21324,
      nutrition: {
          calories: 360,
          fat: 19,
          carbs: 9,   
          protein: 37,
      }
  },
  {   
      name: "Kitkat",
      id: 21325,
      nutrition: {
          calories: 3620,
          fat: 192,
          carbs: 39,   
          protein: 437,
      }
  }
 ]
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => console.log(`Server Running on port ${url}`));