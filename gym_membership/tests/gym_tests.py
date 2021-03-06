
import frappe
from frappe.tests.utils import FrappeTestCase


def create_feedback():
        if frappe.flags.test_rating_created:
            return
        doc = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-05",
            "trainer": "GT-0004",
            "rating": 0.6
        }).insert()

        doc = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-35",
            "trainer": "GT-0004",
            "rating": 0.6
        }).insert()

        doc = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-32",
            "trainer": "GT-0004",
            "rating": 0.6
        }).insert()

        frappe.flags.test_rating_created = True

class TestGymTests(FrappeTestCase):
    def create_data(self):
        create_feedback()
    def test_trainer_feedback(self):
        trainer= frappe.get_doc("Gym Trainer","GT-0004")
        self.assertEqual(trainer.rating, 0.6)


    # def check_locker_booking(self):
    #     frappe.set_user("Administrator")
    #     locker_booking1 = frappe.get_doc(
    #         doctype='Locker Booking',
    #         members_id='GM-07-22-04',
    #         locker="LN-0002")
    #     locker_booking1_doc = locker_booking1.insert()
    #     locker_booking1_doc.submit()

    #     locker_booking2 = frappe.get_doc(
    #         doctype='Locker Booking',
    #         members_id='GM-07-22-05',
    #         locker="LN-0002"

    #     )
    #     locker_booking2_doc = locker_booking2.insert()
    #     locker_booking2_doc.submit()

    




      