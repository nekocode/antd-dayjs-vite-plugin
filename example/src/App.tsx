import { DatePicker } from 'antd';
import React from 'react';
import './App.css';
import moment from 'moment';
import { Dayjs } from 'dayjs';

const App: React.FC = () => {
  return (
    <div className="App">
      <DatePicker defaultValue={moment() as Dayjs} />
    </div>
  );
};

export default App;
