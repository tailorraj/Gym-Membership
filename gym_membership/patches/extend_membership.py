import frappe

def execute():
    member_list = frappe.get_list("Gym Member",{"status":"Active"},["name","expiry_date"])
    for member in member_list:
        extended_date = frappe.utils.add_months(member.expiry_date, 6)
        frappe.db.set_value("Gym Member",member.name,"expiry_date",extended_date)