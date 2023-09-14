import User from "../models/user.js";

const controller = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            return res.status(200).json({
                success: true,
                users
            })

        } catch (error) {
            next(error)
        }
    },
    
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'Usuario creado con exito'
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Error al crear un usuario'
            })
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            return res.status(200).json({
                success: true,
                user
            })

        } catch (error) {
            console.log(error);
        }
    },

    deleteUser: () => {},
}

export default controller;