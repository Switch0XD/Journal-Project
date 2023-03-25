function prefix() {
  const str = ['Flower', 'Flow', 'Flight'];
  let prefix = str[0];
  for (let i = 1; i < str.length; i++) {
    while (str[i].indexOf(prefix) !== 0) {
      try {
        prefix = prefix.substring(0, prefix.length - 1);

      } catch (error) {
        console.log(error);
      }
    }
  } console.log(prefix);
}

prefix();