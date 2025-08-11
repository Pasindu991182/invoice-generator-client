import React from 'react'
import './Template4.css'

const Template4 = ({ data }) => {
  return (
      <div className="template4 mx-auto my-5 p-0 w-800">
        {/* Colorful Header with Wave */}
        <div className="colorful-header position-relative">
          <div className="wave-bg"></div>
          <div className="header-content p-4">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="d-flex align-items-center gap-3 mb-3">
                  {data.CompanyLogo && (
                      <div className="logo-frame">
                        <img src={data.CompanyLogo} alt="Company" width={70} className="company-logo-creative" />
                      </div>
                  )}
                  <div>
                    <h2 className="creative-company-name mb-1">{data.companyName}</h2>
                    <div className="company-subtitle">✨ Premium Invoice Service</div>
                  </div>
                </div>
                <div className="company-info-creative">
                  <div className="info-item">🏢 {data.CompanyAddress}</div>
                  <div className="info-item">📞 {data.CompanyPhone}</div>
                </div>
              </div>
              <div className="col-md-5 text-end">
                <div className="invoice-header-card">
                  <div className="invoice-type-badge">INVOICE</div>
                  <div className="invoice-number-creative">{data.invoiceNumber}</div>
                  <div className="invoice-dates">
                    <div>📅 Issued: {data.invoiceDate}</div>
                    <div>⏰ Due: {data.paymentDate}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="template4-body p-4">
          {/* Colorful Client Cards */}
          <div className="client-cards-section mb-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="creative-client-card bill-card">
                  <div className="card-header-creative">
                    <div className="card-icon">💼</div>
                    <h4 className="card-title-creative">Bill To</h4>
                  </div>
                  <div className="card-body-creative">
                    <div className="client-name-creative">{data.billingName}</div>
                    <div className="client-details-creative">
                      <div>📍 {data.billingAddress}</div>
                      <div>📱 {data.billingPhone}</div>
                    </div>
                  </div>
                </div>
              </div>
              {data.shippingName && data.shippingPhone && data.shippingAddress && (
                  <div className="col-md-6">
                    <div className="creative-client-card ship-card">
                      <div className="card-header-creative">
                        <div className="card-icon">🚛</div>
                        <h4 className="card-title-creative">Ship To</h4>
                      </div>
                      <div className="card-body-creative">
                        <div className="client-name-creative">{data.shippingName}</div>
                        <div className="client-details-creative">
                          <div>📍 {data.shippingAddress}</div>
                          <div>📱 {data.shippingPhone}</div>
                        </div>
                      </div>
                    </div>
                  </div>
              )}
            </div>
          </div>

          {/* Creative Items Section */}
          <div className="creative-items-section mb-4">
            <div className="section-header-creative mb-3">
              <h3 className="section-title-creative">🛍️ Items & Services</h3>
            </div>
            <div className="creative-table-container">
              <table className="creative-table w-100">
                <thead>
                <tr className="creative-table-header">
                  <th className="p-3">Item Description</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-end">Rate</th>
                  <th className="p-3 text-end">Amount</th>
                </tr>
                </thead>
                <tbody>
                {data.items && data.items.map((item, index) => (
                    <tr key={index} className="creative-table-row">
                      <td className="p-3">
                        <div className="item-info-creative">
                          <div className="item-name-creative">{item.name}</div>
                          {item.description && (
                              <div className="item-desc-creative">{item.description}</div>
                          )}
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <div className="qty-badge">{item.qty}</div>
                      </td>
                      <td className="p-3 text-end rate-cell">LKR {Number(item.amount)?.toFixed(2)}</td>
                      <td className="p-3 text-end amount-cell-creative">
                        <div className="amount-highlight">LKR {(Number(item.qty) * Number(item.amount)).toFixed(2)}</div>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Creative Summary */}
          <div className="creative-summary-section mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="total-summary-card">
                  <div className="summary-icon">💰</div>
                  <div className="summary-content">
                    <h4 className="summary-title">Total Amount</h4>
                    <div className="grand-total">LKR {data.total?.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="breakdown-card">
                  <div className="breakdown-row">
                    <span>Subtotal:</span>
                    <span>LKR {data.subtotal?.toFixed(2)}</span>
                  </div>
                  {data.tax > 0 && (
                      <div className="breakdown-row">
                        <span>Tax ({data.tax}%):</span>
                        <span>LKR {data.taxAmount?.toFixed(2)}</span>
                      </div>
                  )}
                  <div className="breakdown-total">
                    <span>Total:</span>
                    <span>LKR {data.total?.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bank Details Card */}
          {(data.accountName || data.accountNumber || data.accountIfsCode) && (
              <div className="bank-details-creative mb-4">
                <div className="creative-section-header">
                  <div className="section-icon">🏦</div>
                  <h4 className="section-title">Payment Details</h4>
                </div>
                <div className="bank-info-grid">
                  {data.accountName && (
                      <div className="bank-info-item">
                        <div className="info-label">Account Holder</div>
                        <div className="info-value">{data.accountName}</div>
                      </div>
                  )}
                  {data.accountNumber && (
                      <div className="bank-info-item">
                        <div className="info-label">Account Number</div>
                        <div className="info-value">{data.accountNumber}</div>
                      </div>
                  )}
                  {data.accountIfsCode && (
                      <div className="bank-info-item">
                        <div className="info-label">IFSC Code</div>
                        <div className="info-value">{data.accountIfsCode}</div>
                      </div>
                  )}
                </div>
              </div>
          )}

          {/* Notes Section */}
          {data.notes && (
              <div className="notes-creative">
                <div className="creative-section-header">
                  <div className="section-icon">📝</div>
                  <h4 className="section-title">Notes & Terms</h4>
                </div>
                <div className="notes-content-creative">
                  {data.notes}
                </div>
              </div>
          )}

          {/* Creative Footer */}
          <div className="creative-footer mt-4 text-center">
            <div className="footer-decoration">✨ ⭐ ✨</div>
            <div className="footer-text">Thank you for choosing our services!</div>
            <div className="footer-decoration">✨ ⭐ ✨</div>
          </div>
        </div>
      </div>
  )
}

export default Template4