const extractHashtags = (post) => {
  // Your code here
  const hashtags = [];

  const words = post.split(' ');

  words.forEach((word) => {
    if (word[0] === '#') {
      hashtags.push(word);
    }
  })

  return hashtags;
}

