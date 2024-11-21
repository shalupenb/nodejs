import { Request, Response } from 'express';
import { User } from '../models/user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController {
    static async getUsers(req: Request, res: Response): Promise<any> {
        try {
            const users = await User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            console.error('Failed while GETTING user:', error);
            return res.status(500).json({ message: 'Failed while GETTING user', error });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Failed while GETTING user:', error);
            return res.status(500).json({ message: 'Failed while GETTING user', error });
        }
    }

    static async createUser(req: Request, res: Response): Promise<any> {
        try {
            const { login, email, password, role } = req.body;
            if (!login || !email || !password || !role) {
                return res.status(400).json({ message: 'Fill all required fields' });
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const user = await User.create({ login, email, password: hashedPassword, role });

            return res.status(201).json(user);
        } catch (error) {
            console.error('Failed while CREATING user:', error);
            return res.status(500).json({ message: 'Failed while CREATING user', error });
        }
    }

    static async updateUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const { login, email, password, role } = req.body;
    
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }
    
            await user.update({ login, email, password, role });
            return res.status(200).json(user);
        } catch (error) {
            console.error('Failed while UPDATING user:', error);
            return res.status(500).json({ message: 'Failed while UPDATING user', error });
        }
    }

    static async deleteUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }
    
            await user.destroy();
            return res.status(204).send();
        } catch (error) {
            console.error('Failed while DELETING user:', error);
            return res.status(500).json({ message: 'Failed while DELETING user', error });
        }
    }

    static async login(req: Request, res: Response): Promise<any> {
        try {
            const { login, password } = req.body;

            const user = await User.findOne({ where: { login } });
            if (!user) {
                return res.status(400).json({ message: 'User not found.' });
            }
            
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ message: 'Wrong password' });
            }

            const token = jwt.sign(
                { id: user.id, login: user.login, role: user.role },
                process.env.SIGNATURE_KEY as string,
                { expiresIn: '1h' }
            );

            res.status(200).json({ message: 'Logged in successfully', token });
        } catch (error) {
            console.error('Failed while LOGGING IN:', error);
            res.status(500).json({ message: 'Failed while LOGGING IN', error });
        }
    }
}
