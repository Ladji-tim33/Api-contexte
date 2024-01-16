import TodoContext from './ApiContexte';
import App from './Pays';
const MainApp = () => {
  return (
    <TodoContext>
      <App />
    </TodoContext>
  );
};

export default MainApp;