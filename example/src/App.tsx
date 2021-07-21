import { DatePicker } from 'antd';
import React from 'react';
import './App.css';
import moment from 'moment';

const App: React.FC = () => {
  return (
    <div className="App">
      <DatePicker defaultValue={moment()} />
    </div>
  );
};

export default App;
