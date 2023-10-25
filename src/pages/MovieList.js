import { useFetch } from '../hooks/useFetch';

import { Card } from '../components';

export const MovieList = () => {
  const { data: movies } = useFetch(
    'https://api.themoviedb.org/3/movie/now_playing?api_key=e76d2381f0382657b3c2960253bbd771'
  );

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
