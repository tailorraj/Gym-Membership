# Copyright (c) 2022, Raaj Tailor and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class LockerBooking(Document):
	def validate(self):
		locker_status = frappe.db.get_value("Locker",{'name':self.locker},'status')
		if locker_status == 'Booked':
			frappe.throw("Locker is Already Booked")
	def on_submit(self):
		frappe.db.set_value("Locker",{'name':self.locker},'status','Booked')
		frappe.db.set_value("Locker",{'name':self.locker},'current_user',self.members_id)
