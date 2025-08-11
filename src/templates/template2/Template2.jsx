import React from 'react'
import './Template2.css'

const Template2 = ({ data }) => {
  return (
      <div className="template2 mx-auto my-5 px-4 py-4 w-800">
        {/* Header Section with Dark Theme */}
        <div className="template2-header mb-4 p-4 rounded">
          <div className="row">
            <div className="col-md-8">
              {data.CompanyLogo && (
                  <div className="mb-3">
                    <img src={data.CompanyLogo} alt="Company" width={80} className="company-logo" />
                  </div>
              )}
              <h1 className="company-name mb-2">{data.companyName}</h1>
              <p className="company-details mb-1">{data.CompanyAddress}</p>
              <p className="company-details mb-0">📞 {data.CompanyPhone}</p>
            </div>
            <div className="col-md-4 text-end">
              <div className="invoice-badge mb-3">
                <h2 className="invoice-title mb-0">INVOICE</h2>
              </div>
              <div className="invoice-details">
                <p className="mb-1"><strong>#{data.invoiceNumber}</strong></p>
                <p className="mb-1">📅 {data.invoiceDate}</p>
                <p className="mb-0">⏰ Due: {data.paymentDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Information Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="client-card bill-to-card p-3 rounded">
              <h4 className="card-title mb-3">🏢 Bill To</h4>
              <h5 className="client-name">{data.billingName}</h5>
              <p className="client-address mb-1">{data.billingAddress}</p>
              <p className="client-phone mb-0">📱 {data.billingPhone}</p>
            </div>
          </div>
          {data.shippingName && data.shippingPhone && data.shippingAddress && (
              <div className="col-md-6">
                <div className="client-card ship-to-card p-3 rounded">
                  <h4 className="card-title mb-3">🚚 Ship To</h4>
                  <h5 className="client-name">{data.shippingName}</h5>
                  <p className="client-address mb-1">{data.shippingAddress}</p>
                  <p className="client-phone mb-0">📱 {data.shippingPhone}</p>
                </div>
              </div>
          )}
        </div>

        {/* Items Table with Modern Design */}
        <div className="items-section mb-4">
          <h4 className="section-title mb-3">📋 Items & Services</h4>
          <div className="table-container">
            <table className="modern-table w-100">
              <thead>
              <tr className="table-header-row">
                <th className="p-3">Description</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-end">Rate</th>
                <th className="p-3 text-end">Amount</th>
              </tr>
              </thead>
              <tbody>
              {data.items && data.items.map((item, index) => (
                  <tr key={index} className="table-row">
                    <td className="p-3">
                      <div className="item-name">{item.name}</div>
                      {item.description && <div className="item-desc">{item.description}</div>}
                    </td>
                    <td className="p-3 text-center qty-cell">{item.qty}</td>
                    <td className="p-3 text-end">LKR {Number(item.amount)?.toFixed(2)}</td>
                    <td className="p-3 text-end amount-cell">LKR {(Number(item.qty) * Number(item.amount)).toFixed(2)}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Section */}
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <div className="summary-card p-4 rounded">
              <div className="summary-row d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>LKR {data.subtotal?.toFixed(2)}</span>
              </div>
              {data.tax > 0 && (
                  <div className="summary-row d-flex justify-content-between mb-2">
                    <span>Tax ({data.tax}%):</span>
                    <span>LKR {data.taxAmount?.toFixed(2)}</span>
                  </div>
              )}
              <hr className="summary-divider" />
              <div className="total-row d-flex justify-content-between">
                <span><strong>Total:</strong></span>
                <span><strong>LKR {data.total?.toFixed(2)}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Account Details */}
        {(data.accountName || data.accountNumber || data.accountIfsCode) && (
            <div className="bank-section mt-4 p-4 rounded">
              <h4 className="section-title mb-3">🏦 Payment Details</h4>
              <div className="row">
                {data.accountName && (
                    <div className="col-md-4">
                      <strong>Account Holder:</strong><br />
                      {data.accountName}
                    </div>
                )}
                {data.accountNumber && (
                    <div className="col-md-4">
                      <strong>Account Number:</strong><br />
                      {data.accountNumber}
                    </div>
                )}
                {data.accountIfsCode && (
                    <div className="col-md-4">
                      <strong>IFSC Code:</strong><br />
                      {data.accountIfsCode}
                    </div>
                )}
              </div>
            </div>
        )}

        {/* Notes Section */}
        {data.notes && (
            <div className="notes-section mt-4 p-4 rounded">
              <h4 className="section-title mb-3">📝 Notes & Terms</h4>
              <p className="notes-text mb-0">{data.notes}</p>
            </div>
        )}
      </div>
  )
}

export default Template2