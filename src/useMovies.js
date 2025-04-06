import { useEffect, useState } from 'react';

const KEY = '63055c71';

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      //   callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError('');
          setIsLoading(true);
          const res = await fetch(
            `https://omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error('Something went wrong...');

          const data = await res.json();

          if (data.Response === 'False') throw new Error('Movie not found!');

          setMovies(data.Search);
          // setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setError('');
        setMovies([]);
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
