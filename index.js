/** @format */

// Bài 1

document.getElementById('btnSapXep').onclick = function () {
	var soThu1 = +document.getElementById('soThu1').value;
	var soThu2 = +document.getElementById('soThu2').value;
	var soThu3 = +document.getElementById('soThu3').value;
	var ketQua = '';

	if (soThu1 >= soThu2 && soThu2 >= soThu3) {
		ketQua = soThu3 + '<' + soThu2 + '<' + soThu1;
	} else if (soThu1 >= soThu3 && soThu3 >= soThu2) {
		ketQua = soThu2 + '<' + soThu3 + '<' + soThu1;
	} else if (soThu2 >= soThu1 && soThu1 >= soThu3) {
		ketQua = soThu3 + '<' + soThu1 + '<' + soThu2;
	} else if (soThu2 >= soThu3 && soThu3 >= soThu1) {
		ketQua = soThu1 + '<' + soThu3 + '<' + soThu2;
	} else if (soThu3 >= soThu2 && soThu2 >= soThu1) {
		ketQua = soThu1 + '<' + soThu2 + '<' + soThu3;
	} else {
		ketQua = soThu2 + '<' + soThu1 + '<' + soThu3;
	}

	document.getElementById('txtKetQuaSapXep').value = ketQua;
};

// Bài 2
document.getElementById('btnChaoHoi').onclick = function () {
	var chonThanhVien = document.getElementById('chonThanhVien').value;
	var thongBao = '';
	switch (chonThanhVien) {
		case 'nguoiLa':
			thongBao = 'Xin chào Người lạ ơi!';
			break;
		case 'Bo':
			thongBao = 'Xin chào Bố!';
			break;
		case 'Me':
			thongBao = 'Xin chào Mẹ!';
			break;
		case 'Anh':
			thongBao = 'Xin chào Anh Trai!';
			break;
		case 'Em':
			thongBao = 'Xin chào Em Gái!';
			break;
		default:
			thongBao = 'Vui lòng chọn option';
	}
	document.getElementById('txtChonThanhVien').value = thongBao;
};

// Bài 3
document.getElementById('btnChanLe').onclick = function () {
	var number1 = +document.getElementById('number1').value;
	var number2 = +document.getElementById('number2').value;
	var number3 = +document.getElementById('number3').value;

	var tongSoChan = 0;

	if (number1 % 2 == 0) {
		tongSoChan++;
	}
	if (number2 % 2 == 0) {
		tongSoChan++;
	}
	if (number3 % 2 == 0) {
		tongSoChan++;
	}

	document.getElementById('txtThongBaoChanLe').value =
		'Có ' + tongSoChan + ' số chẵn, ' + (3 - tongSoChan) + ' số lẻ';
};

// Bài 4
document.getElementById('btnTamGiac').onclick = function () {
	var canh1 = document.getElementById('canhThu1').value;
	var canh2 = document.getElementById('canhThu2').value;
	var canh3 = document.getElementById('canhThu3').value;
	var thongBao = '';
	if (canh1 == '' || canh2 == '' || canh3 == '') {
		alert('Vui lòng nhập đủ 3 cạnh');
	} else {
		canh1 *= 1;
		canh2 *= 1;
		canh3 *= 1;
		if (canh1 === 0 || canh2 === 0 || canh3 === 0) {
			thongBao = 'KHÔNG PHẢI LÀ TAM GIÁC';
		} else if (
			canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
			canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
			canh3 * canh3 == canh2 * canh2 + canh1 * canh1
		) {
			thongBao = 'Hình tam giác vuông';
			if (canh1 == canh2 || canh1 == canh3 || canh3 == canh2) {
				thongBao = 'Hình tam giác vuông cân';
			}
		} else if (canh1 == canh2 && canh1 == canh3) {
			thongBao = 'Hình tam giác đều';
		} else if (canh1 == canh2 || canh1 == canh3 || canh3 == canh2) {
			thongBao = 'Hình tam giác cân';
		} else {
			thongBao = 'Hình tam giác thường';
		}
	}
	document.getElementById('txtThongBaoTamGiac').value = thongBao;
};

// Bài 5

function isCheck(ngayNhap, thangNhap, namNhap) {
	if (ngayNhap == 0 || thangNhap == 0 || namNhap <= 0) {
		return true;
	} else if (
		!Number.isInteger(ngayNhap) ||
		!Number.isInteger(thangNhap) ||
		!Number.isInteger(namNhap)
	) {
		return true;
	}
	return false;
}

function tinhNgayHomQua() {
	var ngay = +document.getElementById('ngay').value;
	var thang = +document.getElementById('thang').value;
	var nam = +document.getElementById('nam').value;
	var thongBaoNgayThangNam = '';

	if (isCheck(ngay, thang, nam)) {
		thongBaoNgayThangNam = 'Ngày tháng năm không xác định';
	} else {
		switch (thang) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				{
					// Trường hợp ngày đầu tháng
					if (ngay == 1) {
						// Trường hợp đầu năm
						if (thang == 1) {
							thongBaoNgayThangNam = '31/12/' + (nam - 1);
						} else if (thang == 8) {
							thongBaoNgayThangNam = '31/7/' + nam;
						} else if (thang == 3) {
							thongBaoNgayThangNam = '29/2/' + nam;
						} else {
							thongBaoNgayThangNam = '30/' + (thang - 1) + '/' + nam;
						}
					}
					// Trường hợp ngày trong tháng
					else if (1 < ngay && ngay < 32) {
						thongBaoNgayThangNam = ngay - 1 + '/' + thang + '/' + nam;
					}
					// Trường hợp ngày nhập sai
					else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			case 2:
				{
					if (ngay == 1) {
						thongBaoNgayThangNam = '31/1/' + nam;
					} else if (1 < ngay && ngay < 30) {
						thongBaoNgayThangNam = ngay - 1 + '/' + thang + '/' + nam;
					} else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				{
					if (ngay == 1) {
						thongBaoNgayThangNam = '31/' + (thang - 1) + '/' + nam;
					} else if (1 < ngay && ngay < 31) {
						thongBaoNgayThangNam = ngay - 1 + '/' + thang + '/' + nam;
					} else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			default:
				thongBaoNgayThangNam = 'Tháng không xác định';
				break;
		}
	}

	document.getElementById('txtThongBaoTinhNgayThangNam').value =
		thongBaoNgayThangNam;
}
function tinhNgayMai() {
	var ngay = +document.getElementById('ngay').value;
	var thang = +document.getElementById('thang').value;
	var nam = +document.getElementById('nam').value;
	var thongBaoNgayThangNam = '';

	if (isCheck(ngay, thang, nam)) {
		thongBaoNgayThangNam = 'Ngày tháng năm không xác định';
	} else {
		switch (thang) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				{
					// Trường hợp ngày cuối tháng
					if (ngay == 31) {
						// Trường hợp cuối năm
						if (thang == 12) {
							thongBaoNgayThangNam = '1/1/' + (nam + 1);
						} else {
							thongBaoNgayThangNam = '1/' + (thang + 1) + '/' + nam;
						}
					}
					// Trường hợp ngày trong tháng
					else if (0 < ngay && ngay < 31) {
						thongBaoNgayThangNam = ngay + 1 + '/' + thang + '/' + nam;
					}
					// Trường hợp ngày nhập sai
					else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			case 2:
				{
					if (ngay == 29) {
						thongBaoNgayThangNam = '1/3/' + nam;
					} else if (0 < ngay && ngay < 29) {
						thongBaoNgayThangNam = ngay + 1 + '/' + thang + '/' + nam;
					} else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				{
					if (ngay == 30) {
						thongBaoNgayThangNam = '1/' + (thang + 1) + '/' + nam;
					} else if (0 < ngay && ngay < 30) {
						thongBaoNgayThangNam = ngay + 1 + '/' + thang + '/' + nam;
					} else {
						thongBaoNgayThangNam = 'Ngày không xác định';
					}
				}
				break;
			default:
				thongBaoNgayThangNam = 'Tháng không xác định';
				break;
		}
	}

	document.getElementById('txtThongBaoTinhNgayThangNam').value =
		thongBaoNgayThangNam;
}

// Bài 6
document.getElementById('btnTinhNgay').onclick = function () {
	var thang = +document.getElementById('thangBai6').value;
	var nam = +document.getElementById('namBai6').value;
	var thongBaoNgay = 0;

	if (thang == 0 || nam <= 0) {
		thongBaoNgay = 'Ngày không tồn tại';
	} else if (!Number.isInteger(thang) || !Number.isInteger(nam)) {
		thongBaoNgay = 'Ngày không tồn tại';
	} else {
		switch (thang) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				thongBaoNgay = 'Tháng ' + thang + ' Năm ' + nam + ' có 31 ngày';
				break;
			case 2:
				{
					if (nam % 4 == 0) {
						thongBaoNgay = 'Tháng 2 Năm ' + nam + ' có 29 ngày';
					} else {
						thongBaoNgay = 'Tháng 2 Năm ' + nam + ' có 28 ngày';
					}
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				thongBaoNgay = 'Tháng ' + thang + ' Năm ' + nam + ' có 30 ngày';
				break;
			default:
				thongBaoNgay = 'Tháng không xác định';
				break;
		}
	}
	document.getElementById('txtTinhNgay').value = thongBaoNgay;
};

// Bài 7

document.getElementById('btnDocSo').onclick = function () {
	var iptNhapSo = document.getElementById('iptNhapSo').value;

	if (iptNhapSo == '') {
		alert('Vui lòng nhập số vào ô');
	} else {
		iptNhapSo *= 1;
		var hangTram = '';
		var hangChuc = '';
		var hangDonVi = '';
		var thongbao = '';
		if (iptNhapSo > 99 && iptNhapSo < 1000) {
			hangTram = Math.floor(iptNhapSo / 100);
			hangChuc = Math.floor(iptNhapSo / 10) % 10;
			hangDonVi = iptNhapSo % 10;

			switch (hangTram) {
				case 1:
					thongbao += 'Một trăm ';
					break;
				case 2:
					thongbao += 'Hai trăm ';
					break;
				case 3:
					thongbao += 'Ba trăm ';
					break;
				case 4:
					thongbao += 'Bốn trăm ';
					break;
				case 5:
					thongbao += 'Năm trăm ';
					break;
				case 6:
					thongbao += 'Sáu trăm ';
					break;
				case 7:
					thongbao += 'Bảy trăm ';
					break;
				case 8:
					thongbao += 'Tám trăm ';
					break;
				case 9:
					thongbao += 'Chín trăm ';
					break;
			}

			switch (hangChuc) {
				case 0:
					if (hangDonVi == 0) {
						thongbao += '';
					} else {
						thongbao += 'lẻ ';
					}
					break;
				case 1:
					thongbao += 'mười ';
					break;
				case 2:
					thongbao += 'hai mươi ';
					break;
				case 3:
					thongbao += 'ba mươi ';
					break;
				case 4:
					thongbao += 'bốn mươi ';
					break;
				case 5:
					thongbao += 'năm mươi ';
					break;
				case 6:
					thongbao += 'sáu mươi ';
					break;
				case 7:
					thongbao += 'bảy mươi ';
					break;
				case 8:
					thongbao += 'tám mươi ';
					break;
				case 9:
					thongbao += 'chín mươi ';
					break;
			}
			switch (hangDonVi) {
				case 0:
					thongbao += '';
					break;
				case 1:
					if (hangChuc == 1) {
						thongbao += 'một';
					} else {
						thongbao += 'mốt';
					}
					break;
				case 2:
					thongbao += 'hai ';
					break;
				case 3:
					thongbao += 'ba ';
					break;
				case 4:
					thongbao += 'bốn';
					break;
				case 5:
					thongbao += 'năm ';
					break;
				case 6:
					thongbao += 'sáu ';
					break;
				case 7:
					thongbao += 'bảy ';
					break;
				case 8:
					thongbao += 'tám ';
					break;
				case 9:
					thongbao += 'chín ';
					break;
			}
		} else {
			alert('vui lòng nhập số có 3 chữ số');
		}
		document.getElementById('txtDocSo').value = thongbao;
	}
};

// Bài 8

function tinhDoDai2Diem(x1, x2, y1, y2) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

document.getElementById('btnTimSvXaTruong').onclick = function () {
	var x1 = +document.getElementById('x1').value;
	var y1 = +document.getElementById('y1').value;
	var tenSV1 = document.getElementById('tenSV1').value;
	var x2 = +document.getElementById('x2').value;
	var y2 = +document.getElementById('y2').value;
	var tenSV2 = document.getElementById('tenSV2').value;
	var x3 = +document.getElementById('x3').value;
	var y3 = +document.getElementById('y3').value;
	var tenSV3 = document.getElementById('tenSV3').value;
	var x4 = +document.getElementById('x4').value;
	var y4 = +document.getElementById('y4').value;
	var thongBao = '';

	var khoangCachSv1 = tinhDoDai2Diem(x1, x4, y1, y4);
	var khoangCachSv2 = tinhDoDai2Diem(x2, x4, y2, y4);
	var khoangCachSv3 = tinhDoDai2Diem(x3, x4, y3, y4);

	if (khoangCachSv1 >= khoangCachSv2 && khoangCachSv1 >= khoangCachSv3) {
		thongBao = 'Sinh viên xa trường nhất là: ' + tenSV1;
	} else if (khoangCachSv2 >= khoangCachSv1 && khoangCachSv2 >= khoangCachSv3) {
		thongBao = 'Sinh viên xa trường nhất là: ' + tenSV2;
	} else {
		thongBao = 'Sinh viên xa trường nhất là: ' + tenSV3;
	}

	document.getElementById('txtSvXaTruong').value = thongBao;
};
