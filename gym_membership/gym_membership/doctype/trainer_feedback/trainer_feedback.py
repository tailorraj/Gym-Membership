# Copyright (c) 2022, Raaj Tailor and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TrainerFeedback(Document):
	def on_update(self):
		data = frappe.db.count("Trainer Feedback",{'trainer':self.trainer})
		# frappe.msgprint(str(data))
		frappe.db.set_value("Gym Trainer",{'name':self.trainer},'total_feddback',data)

		rating_count = frappe.db.sql("""select avg(rating) as rating from `tabTrainer Feedback` where trainer = %s group by trainer""",self.trainer,as_dict=1)
		# frappe.msgprint(str(rating_count[0].rating))
		frappe.db.set_value("Gym Trainer",{'name':self.trainer},'rating',rating_count[0].rating)






		
