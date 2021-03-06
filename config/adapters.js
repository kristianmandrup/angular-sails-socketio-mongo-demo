// Configure installed adapters
// If you define an attribute in your model definition,
// it will override anything from this global config.
module.exports.adapters = {

	// If you leave the adapter config unspecified
	// in a model definition, 'default' will be used.
	'default': 'mongo',

  // If you leave the adapter config unspecified
  // in a model definition, 'default' will be used.
 
  // In-memory adapter for DEVELOPMENT ONLY
  memory: {
    module: 'sails-memory'
  },
 
  // Persistent adapter for DEVELOPMENT ONLY
  // (data IS preserved when the server shuts down)
  disk: {
    module: 'sails-disk'
  },

  mongo: {
    module   : 'sails-mongo',
    url      : 'mongodb://localhost:27017/YOUR_DB_NAME'
  }
};
