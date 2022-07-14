# Copyright (c) 2022, Raaj Tailor and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AmenitiesBooking(Document):
	def on_submit(self):
		booking = frappe.db.get_value("Amenities Booking",{"slot":self.slot,"date":self.date,"amenity":self.amenity,"docstatus":1},"name")
		if booking:
			frappe.throw("Amenitiy is already Booked!")


