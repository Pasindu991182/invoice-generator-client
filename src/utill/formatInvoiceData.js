export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        items = [],
        logo = ""
    } = invoiceData || {};

    const currencySymbol = "LKR";
    const subtotal = items.reduce((acc, item) => acc + (item.qty * item.amount), 0);
    const taxAmount = subtotal * (tax / 100);
    const total = subtotal + taxAmount;

    return {
        title,
        companyName: company.name,
        CompanyAddress: company.address,
        CompanyPhone: company.number,
        CompanyLogo: logo,

        invoiceNumber: invoice.number,
        invoiceDate: invoice.date,
        paymentDate: invoice.dueDate,

        accountName: account.name,
        accountNumber: account.number,
        accountIfsCode: account.ifsccode,

        billingName: billing.name,
        billingAddress: billing.address,
        billingPhone: billing.phone,

        shippingName: shipping.name,
        shippingAddress: shipping.address,
        shippingPhone: shipping.phone,

        currencySymbol,
        tax,
        items,
        notes,
        subtotal,
        taxAmount,
        total
    };

   
};

 export const formatDate = (dateStr) =>{
        if(!dateStr) return "N/A";

        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB",{
            day:"2-digit",
            month:"short",
            year:"numeric"
        })
    };
