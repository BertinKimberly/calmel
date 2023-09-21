import Role from "../models/roleModel.js";

export const createRole = async (req, res) => {
   try {
      const { name } = req.body;
      const role = new Role({ name });
      await role.save();
      res.json(role);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};

export const getRoles = async (req, res) => {
   try {
      const roles = await Role.find();
      res.json(roles);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
};
