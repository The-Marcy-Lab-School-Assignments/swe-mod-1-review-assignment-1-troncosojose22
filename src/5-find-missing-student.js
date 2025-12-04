const findMissingStudent = (yesterday, today) => {
  // Your code here
  let missingStudent = "";

  for (let i = 0; i < yesterday.length; i++) {
    if (!today.includes(yesterday[i])) {
      missingStudent = yesterday[i];
      return missingStudent;
    }
  }

  return missingStudent;
}
