import { v4 } from 'node-uuid';
import 'whatwg-fetch';

(function(){
fetch('https://api.github.com/repos/vmg/redcarpet/issues?state=closed')
    .then((response) => response.json())
    .then((responseData) => {
        console.log('xxxx', responseData );
      // this.setState({contacts: responseData});
    })
})();

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
