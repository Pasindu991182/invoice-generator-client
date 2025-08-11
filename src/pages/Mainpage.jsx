import React, {useContext, useEffect, useState} from 'react';
import { Pencil } from 'lucide-react';
import toast from 'react-hot-toast';
import { AppContext } from '../context/AppContext';
import InvoiceForm from '../components/InvoiceForm';
import TemplateGrid from '../components/TemplateGrid';
import {useNavigate} from "react-router-dom"

const Mainpage = () => {
  const [isEditingTitle, setEditingTitle] = useState(false);
  const navigate = useNavigate();
  const { invoiceTitle, setInvoiceTitle, invoiceData, setInvoiceData, setSelectedTemplate } = useContext(AppContext);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
    setInvoiceData((prev) => ({
      ...prev,
      title: newTitle
    }))
  };

  const handleTemplateClick = (templateId) => {
    const hasInvalidItem = invoiceData.items.some(
      (item) => !item.qty || !item.amount
    );
    
    if (hasInvalidItem) {
      toast.error("Please enter quantity and amount for all items");
      return;

    }
    
    toast.success("Template selected successfully!");
    setSelectedTemplate(templateId);
    navigate("/preview")
  }

  const handleTitleBlur = () => {
    setEditingTitle(false);
  };

  useEffect(() => {
    if(!invoiceData.invoice.number){
      const randomNumber = `Inv-${Math.floor(10000 + Math.random() * 900000)}`;
      setInvoiceData((prev) => ({
        ...prev,
        invoice: {...prev.invoice, number: randomNumber},
      }))
    }
  }, [invoiceData, setInvoiceData])

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
               <TemplateGrid onTemplateClick={handleTemplateClick} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mainpage;