import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];


const getInvalidBooks = (list) => {
	const schema = yup.object().shape({
		name: yup.string.required(),
		author: yup.string.required(),
		pagesCount: yup.number.integer().positive().nullable(),
		link: yup.string().url('ссылка на книгу в интернете').nullable().required(),
		genre: yup.string().mixed().oneOf(genres)
	})

	list.filter((book) => (!schema.IsValidSync(book)))
}






const books1 = [
	{
	  name: 'besi',
	  author: 'dostoevski',
	  pagesCount: 100,
	  genre: 'drama',
	  link: 'https://some.ru',
	},
	{
	  name: 'book',
	  author: 'author',
	},
	{
	  name: 'book 2',
	  author: 'author 2',
	  genre: 'drama',
	  pagesCount: '50 страниц', // должно быть числом
	},
	{
	  name: 'book 3',
	  author: 'author 3',
	  genre: 'fantasy',
	  pagesCount: -5, // должно быть положительным числом
	},
  ];


  console.log(getInvalidBooks(books1))