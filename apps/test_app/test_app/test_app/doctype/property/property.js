// Copyright (c) 2021, Innovast Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Property', {
  setup: function(frm){
    // check amenities duplicate
    frm.check_amenities_duplicate = function(frm, row){
      frm.doc.amenities.forEach(item => {
        if(row.amenity == '' || row.idx == item.idx){
          //pass
        }else {
          if(row.amenity == item.amenity){
            //clear field
            row.amenity = '';
            frappe.throw(__(`${item.amenity} already exists in row ${item.idx}`));
            frm.refresh_field('amenities');
          }
        }
      });
    }
    // check flat against outdoor Kitchen
    frm.ckeck_flat_against_outdoor_kitchen = function(frm, row){
      if(row.amenity == "Outdoor Kitchen" && frm.doc.property_type == "Flat"){
        let amenity = row.amenity
        row.amenity = '';
        frappe.throw(__(`${amenity} cannot exist in a flat`));
        frm.refresh_field('amenities');
      }
    }
  },
	refresh: function(frm) {
    // frm.add_custom_button('Say hi', () => {
    //   frappe.prompt('Address', ({value}) => {
    //     if(value){
    //       frm.set_value('address', value);
    //       frm.refresh_field('address')
    //       frappe.msgprint(__(`Address field update with ${value}`));
    //     }
    //   })
    // });

    // frm.add_custom_button('Ping', () => {
    //   console.log('Hi')
    // }, "Action");
    // frm.add_custom_button('Pong', () => {
    //   console.log('Hi')
    // }, "Action");
	},

});


// AMENITY CHILD TABLE
frappe.ui.form.on('Property Amenity Detail', {
  amenity: function(frm, cdt, cdn){
    //grab the entir record
    let row = locals[cdt][cdn];
    frm.ckeck_flat_against_outdoor_kitchen(frm, row);
    frm.check_amenities_duplicate(frm, row, row.amenity);
  }

});
