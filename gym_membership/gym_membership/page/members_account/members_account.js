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
					fieldtype: 'Column Break'
				},
				{
					label:"Locker Booking Detail",
					fieldtype: 'HTML',
					fieldname: 'locker_doc'
				},
				{
					fieldtype: 'Section Break'
				},
				{
					fieldtype: 'Column Break'
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
		
		this.set_data()
		this.set_remaining_days_subscription()
		this.allocated_trainer()
		this.set_past_plan()
		
	}
	async set_data(){
		let member_data = await get_member_data()
		console.log(member_data.message[0].plan)
		console.log(member_data.message[1])
		console.log(member_data.message[2])
		console.log(member_data.message[3])
		console.log(member_data.message[console.log(member_data.message[3])])
		let active_plan_html = '<div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">Active Plan</h5> <h6 class="card-subtitle mb-2 text-muted">'+member_data.message[0].plan+'</h6> </div></div>'
		let remaining_days = '<div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">Remaining Day </h5> <h6 class="card-subtitle mb-2 text-muted">'+member_data.message[1]+'</h6> </div></div>'
		let locker = '<div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">Allocated Locker</h5> <h6 class="card-subtitle mb-2 text-muted">'+member_data.message[4]['name']+'</h6> </div></div>'
		var past_plan_html_content = '';
		past_plan_html_content += '<div class="frappe-card" style="margin-top:30px;width:83%;"><h4>Past Plan</h4><table class="table"><thead><tr><th>Plan</th><th>Expire Date</th><th>Trainer</th></tr></thead><tbody>';
		member_data.message[2].forEach(i =>{
			console.log(i)
			
				past_plan_html_content +=
			'<tr>' +
				
				'<td>' + i.plan +' </td>' +
				'<td>' + i.to_date +'</td>' +
				'<td>' + i.trainer_first_name +' </td>' +
				
			'</tr>';
			
		})
		let trainer = '<div class="card" style="width: 28rem;margin-top:30px;"> <div class="frappe-card"> <h5 class="card-title">Trainer Detail </h5> <p class="card-text">Trainer Name: <b>'+member_data.message[3].first_name+'</b></p><p class="card-text">Trainer Contact: <b>'+member_data.message[3].contact_number+'</b></p><p class="card-text">Trainer Email: <b>'+member_data.message[3].email+'</b></p><p class="card-text">Trainer Description: <b>'+member_data.message[3].description+'</b></p></div></div>'
		
		this.form.get_field('active_plan').html(active_plan_html);
		this.form.get_field('remaining_days').html(remaining_days);
		this.form.get_field('trainer').html(trainer);
		this.form.get_field('past_plan').html(past_plan_html_content);
		this.form.get_field('locker_doc').html(locker);
	}
	set_active_plan(){
		
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

function get_member_data() {
	return new Promise(function(resolve, reject){
		try{
			frappe.call({
				'method': 'gym_membership.gym_membership.page.members_account.members_account.get_active_plan',
				'args': {
					'user': frappe.session.user
				},
				callback: resolve
			});
		} catch (e) {reject(e);}
	});
}