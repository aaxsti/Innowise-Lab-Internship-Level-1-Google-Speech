const countTotalScores = (level: number, correct: number): number => (level === 1 ? correct : correct * parseFloat(`1.${level - 1}`));

export default countTotalScores;
