# Copyright (c) 2022, Raaj Tailor and contributors
# For license information, please see license.txt

from wsgiref.validate import validator
import frappe
from frappe.model.document import Document

class GymMember(Document):
	def vaildate(self):
		if self.user:
			pr_doc = frappe.db.get_value("User Permission", {"user": self.user,"allow":'Gym Member','for_value':self.name})
			if not frappe.db.exists("User Permission", pr_doc):
				permission_doc = frappe.get_doc({
				'doctype': 'User Permission',
				'user': self.user,
				'allow':'Gym Member',
				'for_value':self.name})
				permission_doc.insert()
