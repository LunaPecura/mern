const User = require('../../models/User');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
  try {
    // Add user to database
    const user = await User.create(req.body);
	console.log("inside create");
	console.log(user);
	const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);

  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
};

function createJWT(user) {
	return jwt.sign(
	  // data payload
	  { user },
	  process.env.SECRET,
	  { expiresIn: '24h' }
	);
  }

module.exports = {
  create,
};