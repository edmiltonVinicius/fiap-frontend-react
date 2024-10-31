import useBooks from '../hooks/useBooks';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../@/components/ui/card';
import { buttonVariants } from '../../@/components/ui/button';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';


export default function Books() {
  const [books, setBooks] = React.useState([]);
  const [isBookLoading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/livros?limit=100')
      .then(({ data }) => {
        setBooks(data?.items || []);
      })
      .catch(() => {
        setError('Erro ao buscar livros');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Lista de livros</h2>

      {isBookLoading && <div>Carregando livros...</div>}

      {!isBookLoading && error && (
        <div>{error}</div>
      )}

      {!isBookLoading && (
        <>
          <div className="grid grid-cols-3 gap-2">
            {books.map((book) => (
              <Card key={book.id}>
                <CardHeader>
                  <CardTitle>{book.titulo}</CardTitle>
                  <CardDescription>
                    {book.autor.nome} - {book.editora.nome}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className="w-full h-80 bg-no-repeat bg-center rounded"
                    style={{ backgroundImage: `url('${book.capa}')` }}
                  ></div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    to={`/livros/${book.id}`}
                    className={buttonVariants({
                      variant: 'link',
                      className: '-mx-4',
                    })}
                  >
                    Ver Detalhes
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}
