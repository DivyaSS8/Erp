import React, { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';

const AddClient = () => {
  const [formData, setFormData] = useState({
    invoice_id: '00001',
    invoice_date: '2024-08-09',
    member_id: '21',
    client_name: '',
    contact_number: '',
    alternate_contact: '',
    email: '',
    client_source: '',
    joining_date: '2024-08-09',
    package: '',
    price: '0.00',
    discount: '',
    admission_charges: '0',
    tax: 'No tax (0%)',
    redeem_rewards: '0.00',
    amount_payable: '0.00',
    amount_paid: '',
    payment_mode: 'Branch 1 Mode',
    balance: '0.00',
    client_representative: '',
    appoint_trainer: '',
    gender: '',
    birthday: '',
    anniversary: '',
    profession: '',
    tax_id: '',
    workout_start: '',
    workout_end: '',
    address: '',
    remarks: '',
    profile_picture: null,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_picture: e.target.files[0],
    });

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCaptureClick = () => {
    alert("Capture functionality not implemented yet.");
    // You can add your image capturing logic here.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:5000/add-client', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Client added successfully!');
        // Optionally, reset the form or redirect to another page
      } else {
        alert('Failed to add client.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the client.');
    }
  };

  return (
    <div className="p-4 bg-blue-50 min-h-screen">
      <div className="bg-green-500 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">Create new Product</h2>
      </div>
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Existing Fields */}
          <div>
            <label className="block text-gray-700">Invoice ID</label>
            <input
              type="text"
              name="invoice_id"
              className="border rounded w-full py-2 px-3"
              value={formData.invoice_id}
              disabled
            />
          </div>

          <div>
            <label className="block text-gray-700">Invoice date</label>
            <input
              type="date"
              name="invoice_date"
              className="border rounded w-full py-2 px-3"
              value={formData.invoice_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Member ID</label>
            <input
              type="text"
              name="member_id"
              className="border rounded w-full py-2 px-3"
              value={formData.member_id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client Name</label>
            <input
              type="text"
              name="client_name"
              className="border rounded w-full py-2 px-3"
              value={formData.client_name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              className="border rounded w-full py-2 px-3"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Alternate Contact</label>
            <input
              type="text"
              name="alternate_contact"
              className="border rounded w-full py-2 px-3"
              value={formData.alternate_contact}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="border rounded w-full py-2 px-3"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client Source</label>
            <input
              type="text"
              name="client_source"
              className="border rounded w-full py-2 px-3"
              value={formData.client_source}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Joining Date</label>
            <input
              type="date"
              name="joining_date"
              className="border rounded w-full py-2 px-3"
              value={formData.joining_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Package</label>
            <input
              type="text"
              name="package"
              className="border rounded w-full py-2 px-3"
              value={formData.package}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              className="border rounded w-full py-2 px-3"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Discount</label>
            <input
              type="text"
              name="discount"
              className="border rounded w-full py-2 px-3"
              value={formData.discount}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Admission Charges</label>
            <input
              type="text"
              name="admission_charges"
              className="border rounded w-full py-2 px-3"
              value={formData.admission_charges}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Tax</label>
            <input
              type="text"
              name="tax"
              className="border rounded w-full py-2 px-3"
              value={formData.tax}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Redeem Rewards</label>
            <input
              type="text"
              name="redeem_rewards"
              className="border rounded w-full py-2 px-3"
              value={formData.redeem_rewards}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Amount Payable</label>
            <input
              type="text"
              name="amount_payable"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_payable}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Amount Paid</label>
            <input
              type="text"
              name="amount_paid"
              className="border rounded w-full py-2 px-3"
              value={formData.amount_paid}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Payment Mode</label>
            <input
              type="text"
              name="payment_mode"
              className="border rounded w-full py-2 px-3"
              value={formData.payment_mode}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Balance</label>
            <input
              type="text"
              name="balance"
              className="border rounded w-full py-2 px-3"
              value={formData.balance}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Client Representative</label>
            <input
              type="text"
              name="client_representative"
              className="border rounded w-full py-2 px-3"
              value={formData.client_representative}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Appoint Trainer</label>
            <input
              type="text"
              name="appoint_trainer"
              className="border rounded w-full py-2 px-3"
              value={formData.appoint_trainer}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              className="border rounded w-full py-2 px-3"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>

          {/* <div>
            <label className="block text-gray-700">Birthday</label>
            <input
              type="date"
              name="birthday"
              className="border rounded w-full py-2 px-3"
              value={formData.birthday}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Anniversary</label>
            <input
              type="date"
              name="anniversary"
              className="border rounded w-full py-2 px-3"
              value={formData.anniversary}
              onChange={handleChange}
            />
          </div> */}

          <div>
            <label className="block text-gray-700">Profession</label>
            <input
              type="text"
              name="profession"
              className="border rounded w-full py-2 px-3"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Tax ID</label>
            <input
              type="text"
              name="tax_id"
              className="border rounded w-full py-2 px-3"
              value={formData.tax_id}
              onChange={handleChange}
            />
          </div>

          {/* <div>
            <label className="block text-gray-700">Workout Start</label>
            <input
              type="time"
              name="workout_start"
              className="border rounded w-full py-2 px-3"
              value={formData.workout_start}
              onChange={handleChange}
            />
          </div> */}

          {/* <div>
            <label className="block text-gray-700">Workout End</label>
            <input
              type="time"
              name="workout_end"
              className="border rounded w-full py-2 px-3"
              value={formData.workout_end}
              onChange={handleChange}
            />
          </div> */}

          <div>
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              className="border rounded w-full py-2 px-3"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700">Remarks</label>
            <textarea
              name="remarks"
              className="border rounded w-full py-2 px-3"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700">Profile Picture</label>
            <div className="w-32 h-32 border-2 border-gray-300 flex justify-center items-center relative">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex space-x-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <FaImage className="text-gray-400 text-2xl" />
                  </label>
                  <button onClick={handleCaptureClick}>
                    <FaCamera className="text-gray-400 text-2xl" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Save Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
