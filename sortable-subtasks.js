//Copy the code below into the "URL" portion of the bookmark in your favourite browser
jQuery(document).ready(function() {
  	(function(){jQuery(function(){jQuery("#issuetable>tbody").sortable({
		start:function(){
			old_order=getorder();
		},
		stop:function(event,ui){
			new_order=getorder();
			for(i=0;i<=new_order.length;i++)
			{
				id=ui.item[0].id;
				if(id==old_order[i])oldpos=i;
				if(id==new_order[i])newpos=i;
			}
	
			enumerator = 1;
			jQuery('#issuetable>tbody').children('tr').each(function(idx,elm){
				withTick = jQuery(elm).find('td.stsequence>div');
				withoutTick = jQuery(elm).find('td.stsequence');
	
				if(jQuery(withTick).length > 0){
					jQuery(withTick).text(enumerator+".");
				}else{
					jQuery(withoutTick).text(enumerator+".");
				}
	
				enumerator++;
			});
	
			jQuery.ajax({
				url:'/secure/MoveIssueLink.jspa?id='+jQuery('#key-val').attr('rel')+'&currentSubTaskSequence='+oldpos+'&subTaskSequence='+newpos,
			});
		}
	});
	function getorder(){
		order=[];
		jQuery('#issuetable>tbody').children('tr').each(function(idx,elm){
				if(elm.id) order.push(elm.id)});
				return order;
			}
		});
	})()
});
