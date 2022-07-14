frappe.ui.form.on('Gym Member', {
	refresh(frm) {
		// your code here
	},
	first_name(frm){
	    if(frm.doc.first_name && frm.doc.last_name){
	        frm.set_value("full_name",frm.doc.first_name+" "+frm.doc.last_name);
	        frm.refresh_field("full_name");
	    }
	},
	last_name(frm){
	    if(frm.doc.first_name && frm.doc.last_name){
	        frm.set_value("full_name",frm.doc.first_name+" "+frm.doc.last_name);
	        frm.refresh_field("full_name");
	    }
	},
	membership_type:function(frm){
	    if(frm.doc.membership_type =="MS-07-22-01"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 3));
	        frm.refresh_field('expiry_date');
	    }
	    else if(frm.doc.membership_type =="MS-07-22-02"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 6));
	        frm.refresh_field('expiry_date');
	    }
	     else if(frm.doc.membership_type =="MS-07-22-03"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 12));
	        frm.refresh_field('expiry_date');
	    }
	},
	joining_date:function(frm){
	    if(frm.doc.membership_type =="MS-07-22-01"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 3));
	        frm.refresh_field('expiry_date');
	    }
	    else if(frm.doc.membership_type =="MS-07-22-02"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 6));
	        frm.refresh_field('expiry_date');
	    }
	     else if(frm.doc.membership_type =="MS-07-22-03"){
	        frm.set_value('expiry_date',frappe.datetime.add_months(frm.doc.joining_date, 12));
	        frm.refresh_field('expiry_date');
	    }
	}
});