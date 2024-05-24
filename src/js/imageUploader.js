const img = document.getElementById("image-upload");
const imgViewer = document.getElementById("image-viewer");
const dragArea = document.getElementById("drag-area");
img.addEventListener("change", uploadImage);

function uploadImage() {
	let link = URL.createObjectURL(img.files[0]);
	imgViewer.style.backgroundImage = `url(${link})`;
	imgViewer.textContent = "";
	dragArea.style.border = 0;
	return;
}

dragArea.addEventListener("dragover", (e) => e.preventDefault());
dragArea.addEventListener("drop", (e) => {
	e.preventDefault();
	img.files = e.dataTransfer.files;
	uploadImage();
});
