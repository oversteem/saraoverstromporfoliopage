new Chart(document.getElementById("doughnut-chart1"), {
	type: 'doughnut',
	data: {
		labels: ["HTML", "CSS", "JavaScript", "Design",],
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["rgba(204, 50, 4, 0.774)", "rgba(13, 65, 177, 0.9)","rgba(238, 220, 59, 0.918)", "rgba(231, 56, 50, 0.685)"],
				data: [25,25,25,25]
				/*canvas.style.width  = "200px";
				canvas.style.height = "125px"; */
				
			}
		]
    },
    options: { 
		title: {
			display: true,
			
      }
    }
});

new Chart(document.getElementById("doughnut-chart2"), {
	type: 'doughnut',
	data: {
		labels: ["HTML", "CSS", "JavaScript", "Design"],
		datasets: [
			{
				label: "Population (millions)",
				backgroundColor: ["rgba(204, 50, 4, 0.774)", "rgba(13, 65, 177, 0.9)","rgba(238, 220, 59, 0.918)", "rgba(231, 56, 50, 0.685)"],
				data: [20,25,35, 20]
				/*canvas.style.width  = "200px";
				canvas.style.height = "125px"; */ 
			}
		]
    },
    options: {
		title: {
			display: true,
			
      }
    }
});
