import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const prisma = new PrismaClient()

app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany();

  return res.json({ games });
})

app.get("/games/:id/ads", (req, res) => {
  // const gameId = req.params.id
  return res.json({})
});

app.post("/ads", (req, res) => {
  return res.status(201).json({})
})


app.get("/ads/:id/discord", (req, res) => {
  // const adId = req.params.id
  return res.json({})
});

app.listen(8888);