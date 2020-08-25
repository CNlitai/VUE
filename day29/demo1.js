const databasePromise = connectDatabase();

const booksPromise = databasePromise
  .then(findAllBooks);

const userPromise = databasePromise
  .then(getCurrentUser);

Promise.all([
  booksPromise, 
  userPromise
])
.then(([books, user]) => {pickTopRecommentations(books, user)})