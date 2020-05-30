export const getScores = (req, res) => {
  const result = ScoreService.getTopFiveScores();
  res.send({result});
};

export const submitEntry = (req, res) => {
  const entry = req.body;
  if(!entry || !entry.name || !entry.word) {
    return res.send({
      errorMessage: 'Invalid Entry'
    });
  }

  const point = ScoreService.submitEntry(entry);
  res.send({
    result: point
  });
};
