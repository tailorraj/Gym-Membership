frappe.ui.form.on('Locker Booking', {
	refresh(frm) {
		// your code here
	},
	from_date:async function(frm){
	    frm.set_value("days", frappe.datetime.get_day_diff(frm.doc.to_date,frm.doc.from_date ));
	    frm.refresh_field("days");
	    var get_value = await frappe.db.get_single_value("Gym Setting",'locker_per_day_charge');
	    console.log(get_value);
	    frm.set_value("locker_fees",(frm.doc.days*get_value));
	    frm.refresh_field("locker_fees");
	    
	},
	to_date:async function(frm){
	    frm.set_value("days", frappe.datetime.get_day_diff(frm.doc.to_date,frm.doc.from_date ));
	    frm.refresh_field("days");
	    var get_values = await frappe.db.get_single_value("Gym Setting",'locker_per_day_charge');
	    console.log(get_values);
	    frm.set_value("locker_fees",(frm.doc.days*get_values));
	    frm.refresh_field("locker_fees");
	},
	setup: function(frm) {
		frm.set_query("locker", function() {
			return {
				filters: [
					["Locker","status","in",["Available"]]
				]
			};
		});
	}
});