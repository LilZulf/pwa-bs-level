import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BSugarItem } from '../../../Type/bsugar';
import { Button, Spacer } from '../../Atoms';

interface ListItemsProps {
  data: BSugarItem[];
  handleDelete: (id: string) => void;
}

const ListItems: React.FC<ListItemsProps> = ({ data, handleDelete }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State for selected date

  const bloodStatus = (bsLevel: number) => {
    if (bsLevel <= 100) {
      return <span className="badge badge-success">Normal</span>;
    } else if (bsLevel <= 200) {
      return <span className="badge badge-warning">Warning</span>;
    } else {
      return <span className="badge badge-error">High</span>;
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const filteredData = data.filter(item => {
    if (!selectedDate) return true;
    const itemDate = new Date(item.id);
    return (
      itemDate.getFullYear() === selectedDate.getFullYear() &&
      itemDate.getMonth() === selectedDate.getMonth() &&
      itemDate.getDate() === selectedDate.getDate() &&
      itemDate.getHours() === selectedDate.getHours()
    );
  });


  return (
    <>
      <div className="flex w-full items-center justify-center">
        {/* Date picker component */}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="E MMM dd yyyy HH:mm" // Custom date and time format
          showTimeSelect // Show time select
          timeFormat="HH:mm" // Time format
          placeholderText="Search by date and time..."
          className='input input-bordered input-primary'
        />
      </div>
      <Spacer size={12} />
      <ul>
        {filteredData.map((item) => (
          <div className="w-96 px-5" key={item.id}>
            <div className="card border-2 border-primary">
              <div className="card-body">
                <h1 className="card-title">{item.value} mg/dL {bloodStatus(parseFloat(item.value))}</h1>
                <p><span className="badge badge-neutral">{item.type}</span> - {item.id}</p>
                <div className="card-actions justify-end">
                  <Button type='button' buttonClass="btn btn-error w-full" onClick={() => handleDelete(item.id)}>Delete</Button>
                </div>
              </div>
            </div>
            <Spacer size={12} />
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
