import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar';

const EnergyLoadCalculation = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [hoursPerDay, setHoursPerDay] = useState({});
  const [result, setResult] = useState(null);

  // Fetch devices from API
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get('https://yagitech-solar.onrender.com/api/devices');
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    };
    fetchDevices();
  }, []);

  // Handle device selection
  const handleDeviceSelection = (deviceId) => {
    if (!selectedDevices.includes(deviceId)) {
      setSelectedDevices([...selectedDevices, deviceId]);
    }
  };

  // Handle hours input
  const handleHoursInput = (deviceId, value) => {
    setHoursPerDay({
      ...hoursPerDay,
      [deviceId]: value,
    });
  };

  // Handle device removal
  const handleRemoveDevice = (deviceId) => {
    setSelectedDevices(selectedDevices.filter(id => id !== deviceId));
    const updatedHours = { ...hoursPerDay };
    delete updatedHours[deviceId];
    setHoursPerDay(updatedHours);
  };

  // Handle submit and calculate energy usage
  const calculateEnergyUsage = async () => {
    const appliances = selectedDevices.map(deviceId => ({
      id: deviceId,
      hoursPerDay: hoursPerDay[deviceId] || 0,
    }));

    try {
      const response = await axios.post('https://yagitech-solar.onrender.com/api/calculate', appliances);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="container mx-auto p-4 mt-[80px]">
      <div className="max-w-md mx-auto bg-green-50 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Energy Load Calculation</h1>
        <p className="text-sm text-gray-600 mb-4">
          Please select <strong>only</strong> the appliances you want to power with the Solar Home System
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="device" className="block font-semibold mb-1">Choose Device</label>
            <select id="device" className="w-full p-2 border rounded" onChange={(e) => handleDeviceSelection(e.target.value)}>
              <option value="">Choose a device</option>
              {devices.map(device => (
                <option key={device._id} value={device._id}>
                  {device.name} (Power Rating: {device.power_rating} kW)
                </option>
              ))}
            </select>
          </div>

          {selectedDevices.map(deviceId => (
            <div key={deviceId} className="mb-4">
              <label className="block font-semibold mb-1">Hours of usage daily for {devices.find(device => device._id === deviceId)?.name}</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Enter hours per day"
                value={hoursPerDay[deviceId] || ''}
                onChange={(e) => handleHoursInput(deviceId, e.target.value)}
              />
              <button
                type="button"
                className="mt-2 text-red-500 hover:text-red-700"
                onClick={() => handleRemoveDevice(deviceId)}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={calculateEnergyUsage}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Calculate
          </button>
        </form>

        {/* Display Results */}
        {result && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Total kW Usage</h3>
            <p>Weekly: {result['Total Kw Usage'].weekly} kW</p>
            <p>Monthly: {result['Total Kw Usage'].monthly} kW</p>
            <p>Yearly: {result['Total Kw Usage'].yearly} kW</p>
            <h3 className="text-xl font-bold mt-4">Recommended Products</h3>
            <ul className="list-disc pl-6">
              {result['Recommended Products'].map(product => (
                <li key={product._id}>{product.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default EnergyLoadCalculation;