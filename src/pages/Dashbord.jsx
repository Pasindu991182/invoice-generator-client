import React, { useContext, useEffect, useState } from "react";
import { getAllInvoices } from "../service/invoiceService.js";
import {AppContext, initialInvoiceData} from "../context/AppContext";
import { toast } from 'react-hot-toast';
import {Plus} from "lucide-react";
import {formatDate} from "../utill/formatInvoiceData.js"
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
    const [invoices, setInvoices] = useState([]);
    const { baseURL,setInvoiceData,setInvoiceTitle,setSelectedTemplate} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await getAllInvoices(baseURL);
                setInvoices(response.data);
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchInvoices();
    }, [baseURL]);

    const handleViewClick = (invoice) => {
        setInvoiceData(invoice);
        setSelectedTemplate(invoice.template || "template1");  // Fixed: Use setSelectedTemplate
        setInvoiceTitle(invoice.title || "New Invoice");
        navigate('/preview');
    };

    const handleCreateNew = () => {
        // Reset to initial state from context
        setInvoiceTitle("New Invoice");
        setSelectedTemplate("template1");  // Fixed: Use setSelectedTemplate instead of selectedTemplate
        setInvoiceData(initialInvoiceData);
        navigate('/generate');  // This should navigate to generate page
    };

    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <div onClick={handleCreateNew} className="card h-100 cursor-pointer">
                    <Plus size={48} />
                    <p className="mt-3 fw-medium">Create new Invoice</p>
                </div>

                {/* Render the existing invoices*/}
                {invoices.map((invoice,idx) => (
                    <div className="col" key={idx}>
                        <div  className="card h-100 shadow-sm cursor-pointer" style={{minHeight:'270px'}} onClick={() => handleViewClick(invoice)}>
                            {invoice.thumbnailUrl && (
                                <img
                                    src={invoice.thumbnailUrl}
                                    alt="Invoice thumbnail"
                                    className="card-img-top"
                                    style={{ width: '200px', height: '200px' }}
                                />
                            )}
                            <div className="card-body">
                              <h6 className="card-title mb-1">{invoice.title}</h6>
                              <small className="text-muted">
                                Last Update:{formatDate(invoice.lastUpdatedAt)}
                              </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
