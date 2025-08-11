import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { templates } from '../assets/assets.js';
import { AppContext } from '../context/AppContext.jsx';
import InvoicePreview from "../components/InvoicePreview.jsx";
import {deleteInvoice, saveInvoice, sendInvoice} from '../service/invoiceService.js';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import html2canvas from "html2canvas";
import { uploadInvoiceThumbnail } from "../service/cloudinaryService.js";
import { generatePdfFromElement } from "../utill/pdfUtils.js";
import {formatDate} from "../utill/formatInvoiceData.js";

const PreviewPage = () => {
    const navigate = useNavigate();
    const { selectedTemplate, setSelectedTemplate, invoiceData, baseURL } = useContext(AppContext);
    const previewRef = useRef();
    const [loading, setLoading] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [emailing, setEmailing] = useState("");

    // Save and exit
    const handleSaveAndExit = async () => {
        try {
            setLoading(true);

            const canvas = await html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#fff",
                scrollY: -window.scrollY,
            });
            const imageData = canvas.toDataURL('image/png');
            const thumbnailUrl = await uploadInvoiceThumbnail(imageData);

            const payload = {
                ...invoiceData,
                thumbnailUrl,
                template: selectedTemplate
            };

            const response = await saveInvoice(baseURL, payload);
            if (response.status === 200) {
                toast.success("Invoice saved successfully");
                navigate("/dashboard");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to save invoice");
        } finally {
            setLoading(false);
        }
    };

    // Delete invoice
    const handleDelete = async () => {
        try {
            const response = await deleteInvoice(baseURL, invoiceData.id);
            if (response.status === 204) {
                toast.success("Invoice deleted successfully");
                navigate("/dashboard");
            } else {
                toast.error("Unable to delete invoice");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete invoice");
        }
    };

    const handleSendEmail = async () => {
        if (!previewRef.current || !customerEmail) {
            return toast.error("Please enter a valid email and try again");
        }
        try {
            setEmailing(true);

            // Generate PDF as Blob
            const pdfBlob = await generatePdfFromElement(
                previewRef.current,
                `invoice_${Date.now()}.pdf`,
                true
            );

            // Create form data
            const formData = new FormData();
            formData.append("file", pdfBlob, `invoice_${Date.now()}.pdf`);
            formData.append("email", customerEmail);

            // Send to API
            const response = await sendInvoice(baseURL, formData);
            if (response.status === 200) {
                toast.success("Invoice sent successfully");
            } else {
                toast.error("Failed to send invoice");
            }
        } catch (error) {
            toast.error(`Failed to send invoice: ${error.message}`);
            console.error(error);
        } finally {
            setEmailing(false);
        }
    };


    const handleDownloadpdf = async () => {
        if (!previewRef.current) return;
        try {
            setDownloading(true);
            await generatePdfFromElement(
                previewRef.current,
                `invoice_${Date.now()}.pdf`
            );
            toast.success("PDF downloaded successfully");
        } catch (error) {
            toast.error(`Failed to generate invoice: ${error.message}`);
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className='previewpage container-fluid d-flex flex-column p-3 min-vw-100'>

            {/* Action Buttons */}
            <div className='d-flex flex-column align-items-center mb-3 gap-3'>

                {/* Template Selector */}
                <div className='d-flex gap-2 flex-wrap justify-content-center'>
                    {templates.map(({ id, label }) => (
                        <button
                            key={id}
                            onClick={() => setSelectedTemplate(id)}
                            style={{ minWidth: '100px' }}
                            className={`btn btn-sm rounded-pill px-3 py-2 ${selectedTemplate === id ? 'btn-warning' : 'btn-outline-secondary'}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Controls */}
                <div className="d-flex flex-wrap justify-content-center mb-5 gap-3">
                    <button className="btn btn-success px-4 py-2" onClick={handleSaveAndExit} disabled={loading}>
                        {loading && <Loader2 className='me-2 spin-animation' size={18} />}
                        {loading ? "Saving..." : "Save and Exit"}
                    </button>
                    {invoiceData.id && <button className="btn btn-danger px-4 py-2" onClick={handleDelete}>Delete Invoice</button>}
                    <button className="btn btn-outline-primary px-4 py-2" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
                    <button className="btn btn-info text-white px-4 py-2" onClick={() => setShowModal(true)}>Send Email</button>
                    <button
                        className="btn btn-dark px-4 py-2"
                        onClick={handleDownloadpdf}
                        disabled={downloading}
                    >
                        {downloading && <Loader2 className='me-2 spin-animation' size={18} />}
                        {downloading ? "Downloading..." : "Download PDF"}
                    </button>
                </div>
            </div>

            {/* Invoice Preview */}
            <div className='flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light'>
                <div ref={previewRef} className="invoice-preview">
                    <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
                </div>
            </div>

            {/* Send Email Modal */}
            {showModal && (
                <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Send Invoice</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Customer email"
                                    value={customerEmail}
                                    onChange={(e) => setCustomerEmail(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleSendEmail} disabled={emailing}>
                                    {emailing ? "Sending..." : "Send"}
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreviewPage;
