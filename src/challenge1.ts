interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [];

const addBook = (title: string, author: string, year: number) => {
  books.push({ title, author, year });
  console.log(`Book added: "${title}" by ${author} (${year})`);
  return;
};

const listBooks = () => {
  if (books.length === 0) {
    console.log("No books to display");
    return;
  }

  console.log("All Books:");
  books.map((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
  return;
};

const searchBook = (query?: string) => {
  if (!query) {
    console.log("Please provide a title to search.");
    return;
  }

  console.log(`Search Results for "${query}":`);

  const foundBooks = books.filter((book) => book.title.includes(query));

  if (foundBooks.length === 0) {
    console.log(`No books found with title containing "${query}".`);
    return;
  }

  foundBooks.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
  return;
};

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
