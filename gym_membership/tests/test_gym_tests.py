
import frappe
# from frappe.tests.utils import FrappeTestCase
import unittest


def create_feedback(ratings):
        # if frappe.flags.test_events_created:
        #     return
        # print(ratings)
        doc_1 = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-05",
            "trainer": "GT-0004",
            "rating": ratings[0]
        }).insert()
        # print(doc_1.name)

        doc_2 = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-35",
            "trainer": "GT-0004",
            "rating": ratings[1]
        }).insert()
        # print(doc_2.name)

        doc_3 = frappe.get_doc({
            "doctype": "Trainer Feedback",
            "member_id":"GM-07-22-32",
            "trainer": "GT-0004",
            "rating": ratings[2]
        }).insert()
        # print(doc_2.name)

        # frappe.flags.test_events_created = True

        

class GymTests(unittest.TestCase):
    # @classmethod
    
    def setUp(self):
        self.ratings = [0.1,0.6,0.9]

        create_feedback(self.ratings)
        frappe.set_user("Administrator")
    def test_trainer_feedback(self):
        frappe.set_user("Administrator")
        trainer= frappe.get_doc("Gym Trainer","GT-0004")
        feed_back_list = frappe.db.get_all("Trainer Feedback",filters=[["trainer","=","GT-0004"]])
        # print(feed_back_list)
        avg = sum(self.ratings)/len(self.ratings)
        frappe.db.rollback()
        self.assertEqual(round(trainer.rating,2), round(avg,2))
        


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

    




      