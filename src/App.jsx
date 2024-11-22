import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const GoodsList = ({ goodsArray, setGoodName, goodName }) => (
  <table className="table">
    <tbody>
      {goodsArray.map(good => (
        <tr
          data-cy="Good"
          className={cn({ 'has-background-success-light': goodName === good })}
        >
          <td>
            {goodName === good ? (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={() => {
                  setGoodName(null);
                }}
              >
                -
              </button>
            ) : (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => {
                  setGoodName(good);
                }}
              >
                +
              </button>
            )}
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const App = () => {
  const [goodName, setGoodName] = useState('Jam');

  return (
    <main className="section container">
      {goodName === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goodName} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGoodName(null);
            }}
          />
        </h1>
      )}
      <GoodsList
        goodsArray={goods}
        goodName={goodName}
        setGoodName={setGoodName}
      />
    </main>
  );
};
