export const matchCompatablity = (user1, user2) => {
  let commonPreferences = 0;
  let commonInterests = 0;

  for (let val in user1.preference) {
    if (user1.preference[val] === user2.preference[val]) {
      commonPreferences++;
    }
  }

  for (let interest of user1.interests) {
    if (user2.interests.includes(interest)) {
      commonInterests++;
    }
  }

  const preferenceScore = commonPreferences * 12;
  const interestScore = commonInterests * 8; 

  return preferenceScore + interestScore;
};
