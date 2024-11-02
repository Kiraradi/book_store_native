import axios from 'axios';
import {IBook, IResponse} from '../interfaces';
import {SERVER_URL} from '../../config';
import {ServerBreakpoints} from '../../enams';

const getAllBooks = async () => {
  const response = await axios.get<IResponse<IBook[]>>(
    `${SERVER_URL}${ServerBreakpoints.allBooks}`,
  );

  return response.data.payload;
};

const getBookById = async (id: number) => {
  const response = await axios.get<IResponse<IBook>>(
    `${SERVER_URL}${ServerBreakpoints.book}/${id}`,
  );
  return response.data.payload;
};

export default {
  getBookById,
  getAllBooks,
};
