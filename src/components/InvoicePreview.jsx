import React, { forwardRef } from "react";
import { formatInvoiceData } from "../utill/formatInvoiceData.js";
import Template1 from "../templates/template1/Template1.jsx";
import {templateComponents} from "../utill/invoiceTemplate.js";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedData = formatInvoiceData(invoiceData);

    const SelectedTemplate = templateComponents[template] || templateComponents['template1']

    return (
        <div ref={ref} className="invoice-preview container px-3 py-3 overflow-auto">
            <SelectedTemplate data={formattedData} />
        </div>
    );
});

export default InvoicePreview;
