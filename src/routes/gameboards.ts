
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import GameBoard from '../models/GameBoard';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const count = await mongoose.model('GameBoard').countDocuments();
    const id = count + 1;
    const { name, value, description, minPlayers,maxPlayers,recommendedAge,publisher,designer,releaseDate, imageURL, rulesURL  } = req.body;  
    const gameboard = new GameBoard({ id, name, value, description, minPlayers, maxPlayers, recommendedAge, publisher, designer, releaseDate, imageURL, rulesURL  });
    await gameboard.save();
    res.status(201).json(gameboard);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});


router.get('/', async (req: Request, res: Response) => {
  try {
    const gameboards = await GameBoard.find();
    res.json(gameboards);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:id', async (req: Request, res: Response) => {
  try {
    const gameboard = await GameBoard.findById(req.params.id);
    if (!gameboard) {
      return res.status(404).json({ message: 'GameBoard not found' });
    }
    res.json(gameboard);
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});


router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { name, value, description } = req.body;
    const updatedGameboard = await GameBoard.findByIdAndUpdate(req.params.id, { name, value, description }, { new: true });
    if (!updatedGameboard) {
      return res.status(404).json({ message: 'GameBoard not found' });
    }
    res.json(updatedGameboard);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedGameBoard = await GameBoard.findByIdAndDelete(req.params.id);
    if (!deletedGameBoard) {
      return res.status(404).json({ message: 'GameBoard not found' });
    }
    res.json({ message: 'GameBoard deleted' });
  } catch (error:any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
