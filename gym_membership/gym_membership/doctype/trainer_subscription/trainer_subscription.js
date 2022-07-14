frappe.ui.form.on('Trainer Subscription', {
	refresh(frm) {
		// your code here
	},
	number_of_month(frm){
    	    frm.set_value('total_fees',frm.doc.trainer_fee*frm.doc.number_of_month);
    	    frm.refresh_field('total_fees');
    	   // frm.set_value('paid_amount',frm.doc.trainer_fee*frm.doc.number_of_month-frm.doc.discount);
    	   // frm.refresh_field('paid_amount');
    	    if(frm.doc.number_of_month == "3"){
    	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 3));
    	    frm.refresh_field('to_date');
    	    }
    	    else if(frm.doc.number_of_month == "6"){
        	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 6));
        	    frm.refresh_field('to_date');
    	    }
    	    else if(frm.doc.number_of_month == "12"){
        	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 12));
        	    frm.refresh_field('to_date');
    	    }
	},
// 	from_date(frm){
// 	    if(frm.doc.number_of_month == "3"){
//     	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 3));
//     	    frm.refresh_field('to_date');
// 	    }
// 	    else if(frm.doc.number_of_month == "6"){
//     	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 6));
//     	    frm.refresh_field('to_date');
// 	    }
// 	    else if(frm.doc.number_of_month == "12"){
//     	    frm.set_value('to_date',frappe.datetime.add_months(frm.doc.from_date, 12));
//     	    frm.refresh_field('to_date');
// 	    }
// 	},
	setup: function(frm) {
		frm.set_query("trainer", function() {
			return {
				filters: [
					["Gym Trainer","status","in",["Active"]]
				]
			};
		});
	}
});