import { Trash2, UploadCloud } from 'lucide-react'
import React from 'react'

const InvoiceForm = () => {
    return (
        <div className='invoiceform container py-4'>

            {/* Company Logo */}
            <div className='mb-4'>
                <h5>Company Logo</h5>
                <div className='d-flex align-items-center gap-3'>
                    <label htmlFor="image" className='form-label'>
                        <UploadCloud size={40} className='mb-3 text-muted' />
                        <input type="file" name='logo' id='image' hidden className='form-control' accept='image/*' />
                    </label>
                </div>
            </div>

            {/* Company info */}
            <div className='mb-4'>
                <h5>Your company</h5>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <input type="text" className='form-control' placeholder='Company name' />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" className='form-control' placeholder='Company phone' />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" className='form-control' placeholder='Company address' />
                    </div>
                </div>
            </div>

            {/* Bill to */}
            <div className='mb-4'>
                <h5>Bill to</h5>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <input type="text" className='form-control' placeholder='Client name' />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" className='form-control' placeholder='Client phone number' />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" className='form-control' placeholder='Client Address' />
                    </div>
                </div>
            </div>

            {/* Ship to */}
            <div className='mb-4'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h5 className='mb-0'>Ship to</h5>
                    <div className='form-check d-flex align-items-center'>
                        <input
                            type="checkbox"
                            className='form-check-input me-2'
                            id="sameAsBilling"
                        />
                        <label htmlFor="sameAsBilling" className='form-check-label'>
                            Same as Billing
                        </label>
                    </div>
                </div>

                <div className='row g-3'>
                    <div className='col-md-6'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Name'
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Phone Number'
                        />
                    </div>
                    <div className='col-md-12'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Shipping Address'
                        />
                    </div>
                </div>
            </div>

            {/* Invoice info */}
            <div className='mb-4'>
                <h5>Invoice Information</h5>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <label htmlFor="invoiceNumber" className='form-label'>Invoice Number</label>
                        <input type="text" disabled className='form-control' placeholder='Invoice number' id='invoiceNumber' />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="invoiceDate" className='form-label'>Invoice Date</label>
                        <input type="date" className='form-control' id='invoiceDate' />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="invoiceDueDate" className='form-label'>Invoice Due Date</label>
                        <input type="date" className='form-control' id='invoiceDueDate' />
                    </div>
                </div>
            </div>

            {/* Item Details */}
            <div className='mb-4'>
                <h5>Item Details</h5>
                <div className='card p-3 mb-3'>
                    <div className='row g-3 mb-2'>
                        <div className='col-md-3'>
                            <input type="text" className='form-control' placeholder='Item name' />
                        </div>
                        <div className='col-md-3'>
                            <input type="number" className='form-control' placeholder='Qty' />
                        </div>
                        <div className='col-md-3'>
                            <input type="number" className='form-control' placeholder='Amount' />
                        </div>
                        <div className='col-md-3'>
                            <input type="number" className='form-control' placeholder='Total' readOnly />
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <textarea className='form-control' placeholder='Description'></textarea>
                        <button className='btn btn-outline-danger' type='button'>
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
                <button className='btn btn-primary'>Add Item</button>
            </div>

            {/* Bank account information */}
            <div className='mb-4'>
                <h5>Bank Account Details</h5>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <input type="text" className='form-control' placeholder='Bank Name' />
                    </div>
                    <div className='col-md-4'>
                        <input type="text" className='form-control' placeholder='Account Number' />
                    </div>
                    <div className='col-md-4'>
                        <input type="text" className='form-control' placeholder='Branch/IFSC Code' />
                    </div>
                </div>
            </div>

            {/* Totals */}
            <div className='mb-4'>
                <h5>Totals</h5>
                <div className='d-flex justify-content-end'>
                    <div style={{width: '300px'}}>
                        <div className='d-flex justify-content-between mb-2'>
                            <span>Subtotal:</span>
                            <span>LKR 1,000</span>
                        </div>
                        <div className='d-flex justify-content-between mb-2 align-items-center'>
                            <label htmlFor="taxInput" className='me-2'>Tax Rate (%):</label>
                            <input type='number' id='taxInput' className='form-control' placeholder='2' style={{width: '80px'}} />
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <span>Tax Amount:</span>
                            <span>LKR 20</span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between fw-bold'>
                            <span>Grand Total:</span>
                            <span>LKR 1,020</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notes */}
            <div className='mb-4'>
                <h5>Notes:</h5>
                <div className='w-100'>
                    <textarea name="notes" className='form-control' rows={3} placeholder='Additional notes or terms...'></textarea>
                </div>
            </div>

        </div>
    )
}

export default InvoiceForm