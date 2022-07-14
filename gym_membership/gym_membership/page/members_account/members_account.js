frappe.pages['members-account'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'My Account',
		single_column: true
	});

	new frappe.StockQuery(page);
}


frappe.StockQuery = class StockQuery {

	constructor(page) {
		this.page = page;
		this.make_form();
	}

	make_form() {	
		console.log("form")
		this.form = new frappe.ui.FieldGroup({
			fields: [
				
				
				{
					fieldtype: 'Section Break'
				},
				{
					label:"Active Plan",
					fieldtype: 'HTML',
					fieldname: 'active_plan'
				},
				{
					fieldtype: 'Column Break'
				},
				{
					label:"Remaining Days In Subsciption",
					fieldtype: 'HTML',
					fieldname: 'remaining_days'
				},
				{
					fieldtype: 'Section Break'
				},
				{
					label:"Allocated Trainer",
					fieldtype: 'HTML',
					fieldname: 'trainer'
				},
				{
					fieldtype: 'Column Break'
				},
				{
					label:"Past Active Plan",
					fieldtype: 'HTML',
					fieldname: 'past_plan'
				}
			],
			body: this.page.body
			
		});
		this.form.make();
		this.fetch_and_render()
		
	
	}
	fetch_and_render(){
		// console.log(this.form.get_value("item_code"));
		
		this.set_active_plan()
		this.set_remaining_days_subscription()
		this.allocated_trainer()
		this.set_past_plan()
		
	}
	set_active_plan(){
		// console.log(this.form)
		var html_content = '<div class="frappe-card"></div>'
		this.form.get_field('active_plan').html(html_content);
	}
	set_remaining_days_subscription(){	
		var html_content = '<div class="frappe-card"></div>'
		this.form.get_field('remaining_days').html(html_content);
	}
	allocated_trainer(){
		var html_content = '<div class="frappe-card"></div>'
		this.form.get_field('trainer').html(html_content);
	}
	set_past_plan(){
		var html_content = '<div class="frappe-card"></div>'
		this.form.get_field('past_plan').html(html_content);
	}

}