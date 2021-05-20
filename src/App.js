import ChildComponent from "./ChildComponent";
import TodoList from "./TodoList/TodoList";
import SecondComponent from "./SecondComponent";

const App = () => {
  return (
    <div>
      <TodoList />
      <ChildComponent />
      <SecondComponent />
    </div>
  );
};

export default App;
