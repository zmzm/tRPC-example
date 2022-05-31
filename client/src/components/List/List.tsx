import { useState } from 'react';

import { trpc } from '../App';
import type { Cat } from '../../../../server/src/types/cat';
import ListItem from './ListItem';

const List = () => {
  const [error, setError] = useState("");

  const cats = trpc.useQuery(['getAll']);
  const deleteMutation = trpc.useMutation(['delete'], {
    onSuccess: () => {
      cats.refetch();
    },
    onError: (data) => {
      setError(data.message);
    }
  });

  const handleDelete = async(id: string) => {
    deleteMutation.mutate({ id })
  };

  const renderListRow = (cat: Cat) => {
    return (
      <ListItem
        key={cat.id}
        cat={cat}
        onClick={handleDelete}
        loading={deleteMutation.isLoading}
      />
    );
  };

  return (
    <div style={{ paddingLeft: '15px' }}>
      <h2>Cats</h2>
      <span>{error}</span>
      { cats.data && cats.data.map((cat) => {
        return renderListRow(cat);
      })}
    </div>
  );
}

export default List;