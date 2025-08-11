import { Trash2, UploadCloud } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'

const InvoiceForm = () => {
    const { invoiceData, setInvoiceData } = useContext(AppContext)

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                { name: "", qty: "", amount: "", description: "", total: 0 },
            ],
        }));
    };

    const deleteItem = (index) => {
        setInvoiceData((prev) => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index),
        }));
    };

    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    }

    const handleSameasBilling = (e) => {
        if (e.target.checked) {
            setInvoiceData((prev) => ({
                ...prev,
                shipping: { ...prev.billing }
            }))
        }
    }

    const handleItemChange = (index, field, value) => {
        const items = [...invoiceData.items];
        items[index][field] = value;
        if (field === "qty" || field === "amount") {
            items[index].total = (items[index].qty || 0) * (items[index].amount || 0);
        }
        setInvoiceData((prev) => ({ ...prev, items }))
    }

    const calculateTotals = () => {
        const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.total || 0), 0);
        const taxRate = Number(invoiceData.tax || 0);
        const taxAmount = (subtotal * taxRate) / 100;
        const grandTotal = subtotal + taxAmount;

        return { subtotal, taxAmount, grandTotal }
    }

    const { subtotal, taxAmount, grandTotal } = calculateTotals();

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setInvoiceData((prev) => ({
                    ...prev,
                    logo: reader.result,
                }))
            };
            reader.readAsDataURL(file);
        }
    }
    useEffect(() => {
        if (!invoiceData.invoice.number) {
            const randomNumber = `Inv-${Math.floor(10000 + Math.random() * 900000)}`;
            setInvoiceData((prev) => ({
                ...prev,
                invoice: { ...prev.invoice, number: randomNumber },
            }))
        }
    }, [])

    const handleSubmit = () => {
        console.log(invoiceData);
     }

    return (
        <div className='invoiceform container py-4'>

            {/* Company Logo */}
            <div className='mb-4'>
                <h5>Company Logo</h5>
                <div className='d-flex align-items-center gap-3'>
                    <label htmlFor="image" className='form-label' style={{ cursor: 'pointer' }}>
                        {invoiceData.logo ? (
                            <img src={invoiceData.logo} alt='logo' style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <UploadCloud size={40} className='mb-3 text-muted' />
                                <p>Upload Logo</p>
                            </div>
                        )}
                        <input type="file"
                            name='logo'
                            id='image'
                            hidden
                            className='form-control'
                            accept='image/*'
                            onChange={handleLogoUpload} />
                    </label>
                </div>
            </div>

            {/* Company info */}
            <div className='mb-4'>
                <h5>Your company</h5>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <input type="text" className='form-control'
                            placeholder='Company name'
                            onChange={(e) => handleChange("company", "name", e.target.value)}
                            value={invoiceData.company.name} />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" className='form-control'
                            placeholder='Company phone'
                            onChange={(e) => handleChange("company", "number", e.target.value)}
                            value={invoiceData.company.number} />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" className='form-control'
                            placeholder='Company address'
                            onChange={(e) => handleChange("company", "address", e.target.value)}
                            value={invoiceData.company.address} />
                    </div>
                </div>
            </div>

            {/* Bill to */}
            <div className='mb-4'>
                <h5>Bill to</h5>
                <div className='row g-3'>
                    <div className='col-md-6'>
                        <input type="text" className='form-control'
                            placeholder='Client name'
                            value={invoiceData.billing.name}
                            onChange={(e) => handleChange("billing", "name", e.target.value)} />
                    </div>
                    <div className='col-md-6'>
                        <input type="text" className='form-control'
                            placeholder='Client phone number'
                            value={invoiceData.billing.phone}
                            onChange={(e) => handleChange("billing", "phone", e.target.value)} />
                    </div>
                    <div className='col-md-12'>
                        <input type="text" className='form-control'
                            placeholder='Client Address'
                            value={invoiceData.billing.address}
                            onChange={(e) => handleChange("billing", "address", e.target.value)} />
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
                            onChange={handleSameasBilling}
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
                            value={invoiceData.shipping.name}
                            onChange={(e) => handleChange("shipping", "name", e.target.value)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Phone Number'
                            value={invoiceData.shipping.phone}
                            onChange={(e) => handleChange("shipping", "phone", e.target.value)}
                        />
                    </div>
                    <div className='col-md-12'>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Shipping Address'
                            value={invoiceData.shipping.address}
                            onChange={(e) => handleChange("shipping", "address", e.target.value)}
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
                        <input type="text"
                            className='form-control'
                            placeholder='Invoice number'
                            id='invoiceNumber'
                            value={invoiceData.invoice.number}
                            onChange={(e) => handleChange("invoice", "number", e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="invoiceDate" className='form-label'>Invoice Date</label>
                        <input
                            type="date"
                            className='form-control'
                            id='invoiceDate'
                            value={invoiceData.invoice.date}
                            onChange={(e) => handleChange("invoice", "date", e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <label htmlFor="invoiceDueDate" className='form-label'>Invoice Due Date</label>
                        <input
                            type="date"
                            className='form-control'
                            id='invoiceDueDate'
                            value={invoiceData.invoice.dueDate}
                            onChange={(e) => handleChange("invoice", "dueDate", e.target.value)} />
                    </div>
                </div>
            </div>

            {/* Item Details */}
            <div className='mb-4'>
                <h5>Item Details</h5>
                {invoiceData.items.map((item, index) => (
                    <div key={index} className='card p-3 mb-3'>
                        <div className='row g-3 mb-2'>
                            <div className='col-md-3'>
                                <input type="text"
                                    className='form-control'
                                    placeholder='Item name'
                                    value={item.name}
                                    onChange={(e) => handleItemChange(index, "name", e.target.value)} />
                            </div>
                            <div className='col-md-3'>
                                <input type="number"
                                    className='form-control'
                                    placeholder='Qty'
                                    value={item.qty}
                                    onChange={(e) => handleItemChange(index, "qty", e.target.value)} />
                            </div>
                            <div className='col-md-3'>
                                <input type="number"
                                    className='form-control'
                                    placeholder='Amount'
                                    value={item.amount}
                                    onChange={(e) => handleItemChange(index, "amount", e.target.value)} />
                            </div>
                            <div className='col-md-3'>
                                <input type="number"
                                    className='form-control'
                                    placeholder='Total'
                                    readOnly
                                    value={item.total} />
                            </div>
                        </div>
                        <div className='d-flex gap-2'>
                            <textarea className='form-control'
                                placeholder='Description'
                                value={item.description}
                                onChange={(e) => handleItemChange(index, "description", e.target.value)}>
                            </textarea>
                            {invoiceData.items.length > 1 && (
                                <button
                                    className='btn btn-outline-danger'
                                    type='button'
                                    onClick={() => deleteItem(index)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button className='btn btn-primary' onClick={addItem}>Add Item</button>
            </div>
            {/* Bank Account info */}
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <input type="text"
                            className="form-control"
                            placeholder="Account Name"
                            value={invoiceData.account.name}
                            onChange={(e) => handleChange("account", "name", e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <input type="text"
                            className="form-control"
                            placeholder="Account Number"
                            value={invoiceData.account.number}
                            onChange={(e) => handleChange("account", "number", e.target.value)} />
                    </div>
                    <div className='col-md-4'>
                        <input type="text"
                            className="form-control"
                            placeholder="Branch/IFSC Code"
                            value={invoiceData.account.ifsccode}
                            onChange={(e) => handleChange("account", "ifsccode", e.target.value)} />
                    </div>
                </div>
            </div>
            {/* Totals*/}
            <div className='mb-4'>
                <h5>Totals</h5>
                <div className='d-flex justify-content-end'>
                    <div className='w-100 w-md-50'>
                        <div className='d-flex justify-content-between'>
                            <span>Subtotal</span>
                            <span>LKR {subtotal.toFixed(2)}</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-2'>
                            <label htmlFor="taxInput" className='me-2'>Tax Rate (%)</label>
                            <input type="number"
                                id='taxInput'
                                className='form-control w-25 text-end'
                                placeholder='0'
                                value={invoiceData.tax}
                                onChange={(e) => setInvoiceData((prev) => ({ ...prev, tax: e.target.value }))} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span>Tax Amount</span>
                            <span>LKR {taxAmount.toFixed(2)}</span>
                        </div>
                        <div className='d-flex justify-content-between fw-bold mt-2 border-top pt-2'>
                            <span>Grand Total</span>
                            <span>LKR {grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Notes*/}
            <div className='mb-4'>
                <h5>Notes</h5>
                <div className='w-100'>
                    <textarea
                        name='notes'
                        className="form-control"
                        rows={3}
                        placeholder="Additional notes or terms..."
                        value={invoiceData.notes}
                        onChange={(e) => setInvoiceData((prev) => ({ ...prev, notes: e.target.value }))}
                    />
                </div>
            </div>
            <button className='btn btn-success' onClick={handleSubmit}>Submit Invoice</button>

        </div>
    )
}

export default InvoiceForm