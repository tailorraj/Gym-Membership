import frappe
from frappe.utils import date_diff


@frappe.whitelist()
def get_active_plan(user):
    gym_member = frappe.db.get_value("Gym Member",{"user":user},"name")
    if not gym_member:
        frappe.throw("This user is not mapped with active gym member")
    registration_list = frappe.get_all("Gym Registration",{"members_id":gym_member,"docstatus":1},["*"])
    last_registration = registration_list[0]
    remaining_days = date_diff(last_registration.to_date, frappe.utils.nowdate())
    locker_doc= frappe.get_last_doc("Locker Booking",{"members_id":gym_member,"docstatus":1})
    if last_registration.trainer:
        trainer_doc = frappe.get_doc("Gym Trainer",last_registration.trainer)
    return last_registration,remaining_days,registration_list,trainer_doc,locker_doc

