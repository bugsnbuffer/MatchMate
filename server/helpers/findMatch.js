import Users from "../sampledata/Users.js";

export const checkScore = (set1, set2) => {
  const intersection = new Set([...set1].filter((item) => set2.has(item)));

  const union = new Set([...set1, ...set2]);

  const similarity = intersection.size / union.size;
  return similarity * 100;
};

function findSimilarPairs(Users) {
  const similarPairs = [];

  for (let i = 0; i < Users.length - 1; i++) {
    for (let j = i + 1; j < Users.length; j++) {
      const similarityScore = checkScore(Users[i].interest, Users[j].interest);
      
      const minimumSimilarityRequired = 20;

      if (similarityScore >= minimumSimilarityRequired) {
        similarPairs.push({
          user1: Users[i],
          user2: Users[j],
          similarity: similarityScore,
        });
      }
    }
  }

  return similarPairs;
}

// Find similar pairs
const similarPairs = findSimilarPairs(Users);

console.log("Pairs with Similar Interests:");
similarPairs.forEach((pair) => {
  console.log(
    ` ${pair.user1.name} and  ${pair.user2.name} have a similarity score of ${pair.similarity}%`
  );
});






 export const checkCompatibility = (userToMatch, users) => {
  for (let i = 0; i < users.length; i++) {
    let score = checkScore(userToMatch.interest,users[i].interest)

     users[i]["compatablity"] = score
  }
  return users
};





