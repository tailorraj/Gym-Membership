
import frappe
from frappe.tests.utils import FrappeTestCase


class GymTest(FrappeTestCase):
    def check_locker_booking(self):
        frappe.set_user("Administrator")
        locker_booking1 = frappe.get_doc(
            doctype='Locker Booking',
            members_id='GM-07-22-04',
            locker="LN-0002")
        locker_booking1_doc = locker_booking1.insert()
        locker_booking1_doc.submit()

        locker_booking2 = frappe.get_doc(
            doctype='Locker Booking',
            members_id='GM-07-22-05',
            locker="LN-0002"

        )
        locker_booking2_doc = locker_booking2.insert()
        locker_booking2_doc.submit()


       