

function deleteLead(leadId) {
	$.ajax({
		//the route is the same one in the router post
		url: '/lead/' + leadId + '/delete-json',
		contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: JSON.stringify({leadId}),
		type: 'POST',
		success: ((res) => {
			$("#" + leadId).remove(); // removes the lead from the HTML, manipulates the DOM
		}),
		error: ((error) => {
			console.log("error:", error);
		})
	})
}