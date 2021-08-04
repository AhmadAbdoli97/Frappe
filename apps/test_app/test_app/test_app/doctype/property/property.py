# -*- coding: utf-8 -*-
# Copyright (c) 2021, Innovast Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Property(Document):
	# pass

	def after_insert(self):
		frappe.msgprint((f'Document {self.name} inserted successfuly'));

	# validate
	# def validate(self):
	# 	if(self.property_type=="Flat"):
	# 		for amenity in self.amenities:
	# 			if(amenity.amenity=="Outdoor Kitchen"):
	# 				frappe.throw((f'Property of type <b>Flat</b> should not have amenity <b>{amenity.amenity}</b>'))

			#sql
			# amenity = frappe.db.sql(f"""select amenity from `tabProperty Amenity Detail` where parent="{self.name}" and parenttype="Property" and amenity="Outdoor Kitchen";""", as_dict=True)
			# print(f"""\n\n{amenity}""")
			# if (amenity):
			# 	frappe.throw((f'Property of type <b>Flat</b> should not have amenity <b>{amenity[0].amenity}</b>'))
