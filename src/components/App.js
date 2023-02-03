// import logo from './logo.svg';
// import './App.css';
import Info from './Info';
import About from './About';
import Interest from './Interest';


function App() {
  return (
    <div className='container'>
      <div className='card1'>
        <Info></Info>
        <About></About>
        <Interest></Interest>
      </div>
      <div className='card1'>
        <Info></Info>
        <About></About>
        <Interest></Interest>
      </div>
    </div>
  );
}

export default App;
