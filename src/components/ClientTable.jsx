import React, { useEffect, useState, useRef } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const ClientTable = () => {
  const [clients, setClients] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownButtonRefs = useRef([]);
  const dropdownRef = useRef(null);

  // Fetch all clients when the component mounts
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:5000/clients');
        if (response.ok) {
          const data = await response.json();
          setClients(data);
        } else {
          console.error('Failed to fetch clients.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchClients();
  }, []);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleStatusChange = (index, status) => {
    // Handle status change logic here
    console.log(`Client at index ${index} changed status to ${status}`);
    setOpenDropdown(null);
  };

  const handleDelete = (index) => {
    // Handle delete logic here
    console.log(`Client at index ${index} deleted`);
    setOpenDropdown(null);
  };

  const [dropDown, setDropDown]  = useState(false);

  const navigate = useNavigate();
  const navigateToAddProd = ()=>{
      navigate('/add-product');
  }
  return (
    <div className="p-4 bg-blue-50 min-h-screen">
       <div className='w-12/12 m-auto flex justify-between'>
        <div>
        <input className="w-80 p-2 my-5 mr-2 border-2 rounded-md focus:border-green-500 outline-none border-gray-300" type='text' placeholder='search the product..'/>
        <button className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>search</button>
        </div>


        <div className='cursor-pointer text-center mt-5 flex' >
        <button 
        onClick={()=>navigateToAddProd()}
        className='text-white font-bold p-2 my-2 text-lg bg-pink-500 rounded-xl'>
          Add Product
        </button>

          <h1 onClick={()=> (dropDown === false) ? setDropDown(true) : setDropDown(false)} 
          className='bg-pink-500 rounded-xl text-center h-12 font-bold flex items-center justify-between m-2 p-2 text-lg text-white'>
            Options
         <img className="w-10 text-center " src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angle-down-512.png' alt='down arror'/>

          </h1>
        

        </div>
      </div>
      {(dropDown == true) ?
      (<div className='cursor-pointer bg-gray-200 rounded p-3 mr-10 absolute right-10 top-[14rem] '>
          <p className='p-1 border-b-2 border-gray-400'>All Products</p>
          <p className='p-1 border-b-2 border-gray-400'>Expired Product</p>
          <p className='p-1 border-b-2 border-gray-400'>Expiring soon</p>
      </div>):
      (<div className='bg-gray-200 rounded p-3 mr-10 absolute right-10 top-[14rem] hidden'>
      <p className='p-1 border-b-2 border-gray-400'>All Products</p>
      <p className='p-1 border-b-2 border-gray-400'>Expired Product</p>
      <p className='p-1 border-b-2 border-gray-400'>Expiring soon</p>
  </div>)
      } 

      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Product List</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
            <select className="border rounded px-3 py-2">
              <option>Show 10</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--Select Gender--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Packages--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Membership--</option>
              {/* Add more options here */}
            </select>
            <select className="border rounded px-3 py-2">
              <option>--All Client Types--</option>
              {/* Add more options here */}
            </select>
          </div>
          <input 
            type="text" 
            className="border rounded px-3 py-2" 
            placeholder="Search" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Client ID/Biometric ID</th>
                <th className="px-4 py-2 text-left">Photo</th>
                <th className="px-4 py-2 text-left">Client name</th>
                <th className="px-4 py-2 text-left">Number</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Registration</th>
                <th className="px-4 py-2 text-left">Package</th>
                <th className="px-4 py-2 text-left">Expiration</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client, index) => (
                  <tr key={client.invoice_id}>
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 text-center">{client.invoice_id}</td>
                    <td className="px-4 py-2 text-center">{/* Add client photo if available */}</td>
                    <td className="px-4 py-2 text-center">{client.client_name}</td>
                    <td className="px-4 py-2 text-center">{client.contact_number}</td>
                    <td className="px-4 py-2 text-center">{/* Client gender if applicable */}</td>
                    <td className="px-4 py-2 text-center">{client.joining_date}</td>
                    <td className="px-4 py-2 text-center">{client.package}</td>
                    <td className="px-4 py-2 text-center">{/* Add expiration date if applicable */}</td>
                    <td className="px-4 py-2 text-center">
                      {/* Action Button */}
                      <button
                        ref={(el) => (dropdownButtonRefs.current[index] = el)}
                        onClick={() => handleDropdownToggle(index)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-pink-500 text-white text-sm font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500"
                      >
                        Action <FaEllipsisV className="ml-2" />
                      </button>
                      {openDropdown === index && createPortal(
                        <div
                          ref={dropdownRef}
                          className="absolute z-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                          style={{
                            top: dropdownButtonRefs.current[index].getBoundingClientRect().bottom + window.scrollY,
                            left: dropdownButtonRefs.current[index].getBoundingClientRect().left + window.scrollX,
                          }}
                        >
                          <a
                            onClick={() => handleStatusChange(index, 'Pending')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Pending
                          </a>
                          <a
                            onClick={() => handleStatusChange(index, 'Done')}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                          >
                            Done
                          </a>
                          <a
                            onClick={() => handleDelete(index)}
                            className="block px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                          >
                            Delete
                          </a>
                        </div>,
                        document.body
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td className="px-4 py-2" colSpan="10">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="mt-4 flex justify-between items-center">
          <button className="bg-black text-white py-2 px-4 rounded-full">BULK SMS</button>
          <div className="text-green-500">
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ClientTable;
