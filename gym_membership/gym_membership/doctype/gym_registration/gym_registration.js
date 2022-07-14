frappe.ui.form.on('Gym Registration', {
	refresh(frm) {
		// your code here
	},
	plan(frm){
	    if(frm.doc.plan == "Bronze Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 3));
	        frm.refresh_field('to_date');
	    }
	    else if(frm.doc.plan =="Sliver Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 6));
	        frm.refresh_field('to_date');
	    }
	    else if(frm.doc.plan == "Golden Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 12));
	        frm.refresh_field('to_date');
	    }
	},
	from_date(frm){
	    if(frm.doc.plan == "Bronze Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 3));
	        frm.refresh_field('to_date');
	    }
	    else if(frm.doc.plan =="Sliver Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 6));
	        frm.refresh_field('to_date');
	    }
	    else if(frm.doc.plan == "Golden Membership"){
	        frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 12));
	        frm.refresh_field('to_date');
	    }
	}
});