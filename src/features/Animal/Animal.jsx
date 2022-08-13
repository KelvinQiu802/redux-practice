import { fetchData } from './animalSlice';
import { setData } from './animalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Animal = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.animal.data);
  const status = useSelector((state) => state.animal.status);
  const handleClick = () => {
    dispatch(fetchData()).then((value) => dispatch(setData(value.payload)));
  };

  return (
    <div>
      <button onClick={handleClick}>Get</button>
      {status === 'fulfilled' && (
        <div>
          <div>
            <strong>Name: </strong>
            {data.name}
          </div>
          <div>
            <strong>Diet: </strong>
            {data.diet}
          </div>
          <div>
            <strong>Habitat: </strong>
            {data.habitat}
          </div>
          <div>
            <strong>Lifespan: </strong>
            {data.lifespan}
          </div>
          <img src={data.image_link} width='300px' />
        </div>
      )}
    </div>
  );
};

export default Animal;
