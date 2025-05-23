export const getDifficultyLabel = (level: number) => {
  if (level > 0 && level < 4) return "Easy";
  if (level >= 4 && level < 6) return "Medium";
  if (level >= 6 && level <= 10) return "Hard";
  return "Unknown";
};

export const getDifficultyColor = (level: number) => {
  if (level > 0 && level < 4) {
    return "bg-green-100 text-green-700";
  } else if (level >= 4 && level < 6) {
    return "bg-yellow-100 text-yellow-700";
  } else if (level >= 6 && level <= 10) {
    return "bg-red-100 text-red-700";
  } else {
    return "bg-gray-100 text-gray-700";
  }
};
