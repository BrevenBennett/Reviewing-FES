async function firstSixIncomplete(numberIncomplete) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await promise.json();

  const incompleteTasks = result.filter((elem) => !elem.completed).slice(0, 6);

  console.log(incompleteTasks);
}

firstSixIncomplete(6);
