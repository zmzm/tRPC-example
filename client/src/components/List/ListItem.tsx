import type { Cat } from '../../../../server/src/types/cat';

type ListItemPropsType = {
  cat: Cat,
  loading: boolean,
  onClick: (id: string) => void,
};

const ListItem = (props: ListItemPropsType) => {
  const handleOnClick = async() => {
    const { cat, onClick } = props;
    onClick(cat.id)
  };

  const renderListItem = ({ cat, loading }: ListItemPropsType) => {
    return (
      <div key={cat.id}>
        <span style={{ paddingRight: '15px' }}>
          {cat.id}
        </span>
        <span style={{ paddingRight: '15px' }}>
          {cat.name}
        </span>
        <span>
          <button
            onClick={handleOnClick}
            disabled={loading}
          >
            Delete
          </button>
        </span>
      </div>
    );
  };

  return renderListItem(props);
}

export default ListItem;