import { InputNumber } from 'antd';
const onChange = (value) => {
  console.log('changed', value);
};
const App = () => <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />;
export default App;