import FunctionExhibit from './components/atoms/FunctionExhibit';
import TypedObjectExhibit from './components/atoms/TypedObjectsExhibit';
import TestWrapper from './components/molecules/TestWrapper';

function App() {
  return (
    <div className="App">
      <TestWrapper>
        <TypedObjectExhibit
        anchor={[0,0]}
        size={1}
        type='circle'
        isSlot={false}
        ></TypedObjectExhibit>
      </TestWrapper>
      
    </div>
  );
}

export default App;
