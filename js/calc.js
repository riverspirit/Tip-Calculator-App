$(document).ready(function () {
	$('body').on('keyup', '#numPeople, #totalAmount', function () {
		do_the_math();
	});

	$('body').on('change', '#tipPercentage', function () {
		do_the_math();
	});

	function do_the_math() {
		var billAmount = 0,
			tipPercentage,
			tipAmount,
			totalAmount,
			numPersons = 1,
			tiplessDivision,
			tippedDivision,
			tipPaidByOne;

			if ($('#totalAmount').val() !== '') {
				billAmount = parseInt($('#totalAmount').val(), 10);
			}

			if ($('#numPeople').val() !== '') {
				numPersons = parseInt($('#numPeople').val(), 10);
			}

			tipPercentage = parseInt($('#tipPercentage').val(), 10);

			if (billAmount !== 0 && numPersons >= 1 && tipPercentage > 0) {
				tipAmount = billAmount * (tipPercentage / 100);
				totalAmount = Math.ceil(billAmount + tipAmount);
				tiplessDivision = billAmount / numPersons;
				tippedDivision = totalAmount / numPersons;
				tipPaidByOne = tippedDivision - tiplessDivision;
				
				$('#totalAmountPayableByOne').html(tippedDivision);
				$('#splitupActualAmount').html(tiplessDivision);
				$('#splitupTip').html(tipPaidByOne);
			}
	}

	do_the_math();
});