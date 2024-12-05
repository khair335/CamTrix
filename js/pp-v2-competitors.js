const competitorsTableHead = document.querySelectorAll('.table-head');
const competitorsTableBody = document.querySelectorAll('.table-body .table-column');

function trackTableSizes() {
	Array.from(competitorsTableHead[0].children).forEach((tableHead, index) => {
		const rowNumber = tableHead.getAttribute('data-row');
		const rowHeight = tableHead.offsetHeight;
		Array.from(competitorsTableBody).forEach((column) => {
			Array.from(column.children).forEach((row) => {
				const rowIndex = row.getAttribute('data-row');
				if (rowNumber == rowIndex) {
					row.style.height = rowHeight + 'px';
				} else {
					return;
				}
			});
		});
	});
}

if (competitorsTableHead && competitorsTableBody) {
	trackTableSizes();
	window.addEventListener('resize', () => {
		trackTableSizes();
	});
}
