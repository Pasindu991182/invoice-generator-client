import React, { useContext, useState } from 'react';
import { Pencil } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import InvoiceForm from '../components/InvoiceForm';

const Mainpage = () => {
  const [isEditingTitle, setEditingTitle] = useState(false);
  const { invoiceTitle, setInvoiceTitle } = useContext(AppContext);

  const handleTitleChange = (e) => {
    setInvoiceTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setEditingTitle(false);
  };

  return (
    <div className=' mainpage container-fluid bg-light min-vh-100 py-4'>
      <div className='container'>

        {/* Editable Invoice Title */}
        <div className='row mb-4'>
          <div className='col-12 col-lg-6 d-flex'>
            <div className='bg-white border rounded shadow-sm p-4 w-100 d-flex align-items-center'>
              {isEditingTitle ? (
                <input
                  type="text"
                  className="form-control me-2"
                  value={invoiceTitle}
                  onChange={handleTitleChange}
                  onBlur={handleTitleBlur}
                  autoFocus
                />
              ) : (
                <>
                  <h5 className='mb-0 me-2'>{invoiceTitle}</h5>
                  <button
                    className='btn btn-sm p-0 border-0 bg-transparent'
                    onClick={() => setEditingTitle(true)}
                  >
                    <Pencil className='text-primary' size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Invoice form and template grid */}
        <div className='row g-4 align-items-stretch'>
          {/* Invoice Form */}
          <div className='col-12 col-lg-6 d-flex'>
            <div className='bg-white border rounded shadow-sm p-4 w-100'>
              <h6 className='mb-3'>Invoice Form</h6>
              <div>
                <InvoiceForm />
              </div>
            </div>
          </div>

          {/* Template Preview */}
          <div className='col-12 col-lg-6 d-flex'>
            <div className='bg-white border rounded shadow-sm p-4 w-100'>
              <h6 className='mb-3'>Template Preview</h6>
              {/* Add your invoice preview or template display here */}
              <p>Preview content goes here...</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainpage;
