import React from 'react'
import './Template3.css'

const Template3 = ({ data }) => {
  return (
      <div className="template3 mx-auto my-5 px-4 py-4 w-800">
        {/* Clean Header */}
        <div className="header-section mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                {data.CompanyLogo && (
                    <img src={data.CompanyLogo} alt="Company" width={60} className="logo-minimal" />
                )}
                <div>
                  <h3 className="company-name-minimal mb-1">{data.companyName}</h3>
                  <p className="company-tagline mb-0">Professional Invoice</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="invoice-number-badge">
                <small className="invoice-label">INVOICE</small>
                <h2 className="invoice-number">{data.invoiceNumber}</h2>
              </div>
            </div>
          </div>

          {/* Company Details Bar */}
          <div className="company-bar mt-4 py-2 px-3">
            <div className="row">
              <div className="col-md-6">
                <small>📍 {data.CompanyAddress}</small>
              </div>
              <div className="col-md-6 text-md-end">
                <small>📞 {data.CompanyPhone}</small>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Details Grid */}
        <div className="invoice-meta mb-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="meta-card">
                <small className="meta-label">Issue Date</small>
                <div className="meta-value">{data.invoiceDate}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="meta-card">
                <small className="meta-label">Due Date</small>
                <div className="meta-value">{data.paymentDate}</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="meta-card">
                <small className="meta-label">Total Amount</small>
                <div className="meta-value total-preview">LKR {data.total?.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="client-section mb-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="client-info">
                <h5 className="client-title">Billed To</h5>
                <div className="client-details">
                  <div className="client-name">{data.billingName}</div>
                  <div className="client-address">{data.billingAddress}</div>
                  <div className="client-contact">{data.billingPhone}</div>
                </div>
              </div>
            </div>
            {data.shippingName && data.shippingPhone && data.shippingAddress && (
                <div className="col-md-6">
                  <div className="client-info">
                    <h5 className="client-title">Shipped To</h5>
                    <div className="client-details">
                      <div className="client-name">{data.shippingName}</div>
                      <div className="client-address">{data.shippingAddress}</div>
                      <div className="client-contact">{data.shippingPhone}</div>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </div>

        {/* Clean Items Table */}
        <div className="items-table-section mb-5">
          <table className="minimal-table w-100">
            <thead>
            <tr>
              <th>Description</th>
              <th className="text-center">Qty</th>
              <th className="text-end">Rate</th>
              <th className="text-end">Total</th>
            </tr>
            </thead>
            <tbody>
            {data.items && data.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="item-description">
                      <span className="item-name">{item.name}</span>
                      {item.description && <div className="item-note">{item.description}</div>}
                    </div>
                  </td>
                  <td className="text-center">{item.qty}</td>
                  <td className="text-end">LKR {Number(item.amount)?.toFixed(2)}</td>
                  <td className="text-end item-total">LKR {(Number(item.qty) * Number(item.amount)).toFixed(2)}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Summary Section */}
        <div className="summary-section mb-5">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="summary-box">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>LKR {data.subtotal?.toFixed(2)}</span>
                </div>
                {data.tax > 0 && (
                    <div className="summary-line">
                      <span>Tax ({data.tax}%)</span>
                      <span>LKR {data.taxAmount?.toFixed(2)}</span>
                    </div>
                )}
                <div className="summary-total">
                  <span>Total</span>
                  <span>LKR {data.total?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        {(data.accountName || data.accountNumber || data.accountIfsCode) && (
            <div className="footer-section mb-4">
              <h6 className="footer-title">Payment Information</h6>
              <div className="payment-grid">
                {data.accountName && <div><strong>Account:</strong> {data.accountName}</div>}
                {data.accountNumber && <div><strong>Number:</strong> {data.accountNumber}</div>}
                {data.accountIfsCode && <div><strong>IFSC:</strong> {data.accountIfsCode}</div>}
              </div>
            </div>
        )}

        {data.notes && (
            <div className="footer-section">
              <h6 className="footer-title">Additional Notes</h6>
              <p className="notes-content">{data.notes}</p>
            </div>
        )}

        {/* Clean Footer */}
        <div className="invoice-footer mt-5 pt-3">
          <div className="text-center">
            <small>Thank you for your business!</small>
          </div>
        </div>
      </div>
  )
}

export default Template3