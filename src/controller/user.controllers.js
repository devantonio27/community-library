import userService from "../service/user.services.js";

async function createUserController(req, res) {
  const newUser = req.body;

  try {
    const user = await userService.createUserService(newUser);
    res.status(201).send({ user });
  } catch (err) {
    console.log("Cheguei aqui");
    return res.status(400).send(err.message);
  }
}

export default {
  createUserController,
};
