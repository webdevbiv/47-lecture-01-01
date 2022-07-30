import Button from './components/Button/Button'
import { ButtonAnother } from './components/Button/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>test</div>
      <Button
        btnText='new button'
        disabled={false}
        loader
      />
      <Button btnText='click me' />
      <Button btnText='press me' />
      {/* <ButtonAnother /> */}
    </div>
  );
}

export default App;
