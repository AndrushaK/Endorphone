jQuery('document').ready(
function(){

	

	jQuery('.btn').click (function() {
		var brend_id=this.id;
		jQuery(this).toggleClass("btn-success btn-danger");
		if(jQuery("div").is("#"+brend_id))
		{
			jQuery("#device_list > #"+brend_id).remove();
		}
		else
		{
			jQuery.ajax({
				url:'tables/device/show.php',
				data:{'brend_id':brend_id},	
				dataType: "json",
				success: function (data){
					jQuery("#device_list").prepend("<div id=\""+brend_id+"\">");
					jQuery("#device_list > #"+brend_id).prepend("<ul class=\"list-group\">");

					for (var i = 0; i < data.length; i++) {
						jQuery("#device_list > #"+brend_id +" > ul").prepend("<li class=\"list-group-item\">"+data[i]['name']);
					}
				}
			});
		}
	})	
})
jQuery.ajax({
				url:'tables/brend/show.php',
				dataType: "json",
				success: function (data){	
					// jQuery("#brend_btn").prepend(data);
					for (var i = 0; i < data.length; i++) {
						jQuery("#brend_btn").append("<button type=\"button\" class=\"btn btn-success\" id=\""+data[i]['brendId']+"\"> "+data[i]['name']+"</button>");
					}
				}
			});
