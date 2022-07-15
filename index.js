/** @format */
// Bài 1: Tính lương nhân viên
document.getElementById('btnSalary').onclick = function () {
	// lấy dữ liệu input:  lương 1 ngày và số ngày làm
	var salaryDay = document.getElementById('salaryDay').value;
	var numOfWorkingDay = document.getElementById('numOfWorkingDay').value;

	// process: xử lý
	var salary = '';
	salary = salaryDay * numOfWorkingDay;
	// output: tiền lương
	document.getElementById('txtSalary').value = salary;
};
// Bài 2: Tính giá trị trung bình
document.getElementById('btnAverage').onclick = function () {
	// lấy dữ liệu input:  lấy 5 ô input
	var num1 = +document.getElementById('num1').value;
	var num2 = +document.getElementById('num2').value;
	var num3 = +document.getElementById('num3').value;
	var num4 = +document.getElementById('num4').value;
	var num5 = +document.getElementById('num5').value;

	// process: xử lý
	var average = '';
	average = (num1 + num2 + num3 + num4 + num5) / 5;
	// output: giá trị trung bình
	document.getElementById('txtAverage').value = average;
};
// Bài 3: Quy đổi tiền
document.getElementById('btnCurrencyConvert').onclick = function () {
	// lấy dữ liệu input:  lấy ô input số tiền nhập vào
	var currencyConvert = +document.getElementById('currencyConvert').value;

	// process: xử lý
	var usd = '';
	usd = 23500 * currencyConvert;
	// output: tiền đã quy đổi
	document.getElementById('txtCurrencyConvert').value = new Intl.NumberFormat(
		'vn-VN'
	).format(usd);
};

// Bài 4: Tính diện tích, chu vi hình chữ nhật
document.getElementById('btnAreaAndPerimeter').onclick = function () {
	// lấy dữ liệu input:  lấy ô input chiều rộng và chiều dài
	var long = +document.getElementById('long').value;
	var width = +document.getElementById('width').value;

	// process: xử lý
	var area = '';
	var perimeter = '';
	var ketQua = '';
	area = long * width;
	perimeter = (long + width) * 2;
	ketQua += 'Chu vi: ' + perimeter + ' - ' + 'Diện tích: ' + area;
	// output: chu vi và diện tích
	document.getElementById('txtAreaAndPerimeter').value = ketQua;
};

// Bài 5: Tính tổng 2 ký số
document.getElementById('btnNumberSum').onclick = function () {
	// lấy dữ liệu input:  lấy ô input chiều rộng và chiều dài
	var number = +document.getElementById('number').value;

	// process: xử lý
	var numSecond = number % 10;
	var numFirst = number / 10 - numSecond / 10;
	var total = numFirst + numSecond;
	// output: tổng 2 ký số
	document.getElementById('txtNumberSum').value = total;
};
