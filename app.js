/**
 * Created by haruna on 5/22/2015.
 */

$(function() {
    $('#products').validateListWidget();

    $('#products').validateListWidget('setValidators',  {
        'name': { required: true },
        'sku': { required: true, unique: true },
        'price': { required: true, posNumber: true }
    });

    $('#products').validateListWidget('setFormats', {
        'price': { currency:true }
    })
});
