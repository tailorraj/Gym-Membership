# Copyright (c) 2022, Raaj Tailor and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class GymRegistration(Document):
	def on_submit(self):
		frappe.db.set_value("Gym Member",{'name':self.members_id},'membership_type',self.plan)
		

