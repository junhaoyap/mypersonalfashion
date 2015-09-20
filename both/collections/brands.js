Brands = new Mongo.Collection('brands');

Brands.attachSchema(new SimpleSchema({
  id: { 
  	type: String
  },
  userId: {
    type: String
  },
  name: { 
  	type: String
  },
  imageUrl: { 
  	type: String
  }
}));
