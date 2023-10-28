import Auth from "../../models/auth/auth.js";

const getFriends = async (req, res) => {
  try {
    const users = await Auth.find({});

    res.json({ users: users });
  } catch (e) {
    console.log(e);
  }
};

export default getFriends;
