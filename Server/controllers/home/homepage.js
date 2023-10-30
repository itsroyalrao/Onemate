import Auth from "../../models/auth/auth.js";

const getFriends = async (req, res) => {
  try {
    const users = await Auth.find({});

    res.json({ users: users });
  } catch (e) {
    console.log(e);
  }
};

const getFriend = async (req, res) => {
  try {
    const user = await Auth.findOne({ _id: req.body.id });
    res.json({ name: user.name, email: user.email });
  } catch (e) {
    console.log(e);
  }
};

export { getFriends, getFriend };
