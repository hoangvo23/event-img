function upDate(previewPic) {
    /* Khuyên dùng: Dùng console.log để kiểm tra sự kiện kích hoạt và xem biến previewPic 
    */
    /*Name this external file gallery.js*/
    console.log("Sự kiện upDate đang chạy!");
    console.log("Thuộc tính alt: " + previewPic.alt);
    console.log("Thuộc tính src: " + previewPic.src);

    // Tìm phần tử div có id là "image"
    var imageDiv = document.getElementById("image");

    // 1) Thay đổi nội dung chữ của thẻ div thành thuộc tính 'alt' của bức ảnh
    imageDiv.innerHTML = previewPic.alt;

    // 2) Thay đổi hình nền của thẻ div thành thuộc tính 'src' của bức ảnh
    // Lưu ý: Cú pháp của CSS là url('đường_dẫn_ảnh') nên ta phải ghép chuỗi
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Tìm phần tử div có id là "image"
    var imageDiv = document.getElementById("image");

    // 1) Cập nhật lại hình nền về giá trị ban đầu (url rỗng) - Thang điểm yêu cầu Hardcode
    imageDiv.style.backgroundImage = "url('')";
    // (Bạn cũng có thể dùng imageDiv.style.backgroundImage = "none";)

    // 2) Cập nhật lại văn bản về câu gốc ban đầu - Thang điểm yêu cầu Hardcode
    imageDiv.innerHTML = "Hover over an image below to display here.";
}