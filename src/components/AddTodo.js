import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TODO } from '../apollo/mutations';
import { GET_TODOS } from '../apollo/queries';

const AddTodo = () => {
  let input;

  const [
    addTodo,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(ADD_TODO, {
    update(cache, { data: { addedTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addedTodo]) }
      });
    }
  });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      {mutationLoading && <p>Loading...</p>}
      {mutationError && <p>Error :( Please try again</p>}
    </div>
  );
};

export default AddTodo;
