import './App.css';
import Member from '../States/Member'
import Counter from '../States/Counter';
import { Counter_function } from '../States/Counter_function';
import Dientich from '../States/Dientich_hcn';
import Dientich_hcn_class from '../States/Dientich_hcn_class';
import State1 from '../States/State1';
import State2_function from '../States/State2_function';
import FetchAPI_class from '../States/FetchAPI_class';
import FetchAPI_function from '../States/FetchAPI_function';
function App() {
  return (
    <div className="App">
      {/* <Member></Member>
      <Counter></Counter> */}
      {/* <Counter_function></Counter_function> */}
      {/* <Dientich></Dientich> */}
      {/* <Dientich_hcn_class></Dientich_hcn_class> */}
      {/* <State1></State1> */}
      {/* <State2_function></State2_function> */}
      {/* <FetchAPI_class></FetchAPI_class> */}
      <FetchAPI_function></FetchAPI_function>
    </div>
  );
}

export default App;
