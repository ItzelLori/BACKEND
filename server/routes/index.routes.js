// index.routes.js
import { Router } from 'express';
import { pool, connectDB, isConnected } from '../db.js';

const router = Router();

router.get('/profesores', async (req, res) => {
    try {
        if (!isConnected) {
            await connectDB();
        }

        const [rows] = await pool.query('SELECT * FROM Profesor');
        res.json(rows);
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/cursos', async (req, res) => {
    try {
        if (!isConnected) {
            await connectDB();
        }

        const [rows] = await pool.query('SELECT * FROM Curso');
        res.json(rows);
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/alumnos', async (req, res) => {
    try {
        if (!isConnected) {
            await connectDB();
        }

        const [rows] = await pool.query('SELECT * FROM Alumno');
        res.json(rows);
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/administradores', async (req, res) => {
    try {
        if (!isConnected) {
            await connectDB();
        }

        const [rows] = await pool.query('SELECT * FROM Administradores');
        res.json(rows);
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
