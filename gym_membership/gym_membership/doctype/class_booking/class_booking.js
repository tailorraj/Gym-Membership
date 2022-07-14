frappe.ui.form.on('Class Booking', {
	refresh(frm) {
		// your code here
	},
	validate(frm){
	    frm.set_value('paid_amount',(frm.doc.class_fee-frm.doc.discount));
	    frm.refresh_field('paid_amount');
	}
});