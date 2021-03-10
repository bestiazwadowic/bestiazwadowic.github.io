document.addEventListener("DOMContentLoaded", (event) => {
  const imagesPerPageSelect = document.getElementById("select-images-per-page");
  const pageSelect = document.getElementById("select-page");

  let imagesCount = 44;
  let imagesPerPage = imagesPerPageSelect.value;

  createPageSelectOptions(Math.ceil(imagesCount / imagesPerPage));

  let page = pageSelect.value;


  addImages();

  function addImages() {
    page = pageSelect.value;

    let grid = document.getElementById("grid");
    let from = ((page - 1) * imagesPerPage);
    let to = page * imagesPerPage;

    // Remove all photos.
    grid.innerHTML = "";

    for (let i = from; i < to; i++) {
      let imgElement = document.createElement("img");
      
      imgElement.src = "./images/image " + i + ".jpg";
      imgElement.alt = "image " + i + ".jpg";

      let aElement = document.createElement("a");

      aElement.href = "./images/image " + i + ".jpg";
      aElement.target = "_blank";

      aElement.appendChild(imgElement);

      grid.appendChild(aElement);

      // Break if there is no more images.
      if (i >= imagesCount - 1) break;
    }

  }

  imagesPerPageSelect.addEventListener("change", e => {
    imagesPerPage = imagesPerPageSelect.value;

    createPageSelectOptions(Math.ceil(imagesCount / imagesPerPage));

    addImages();
  });


  pageSelect.addEventListener("change", e => addImages());


  function createPageSelectOptions(num) {
    pageSelect.innerHTML = "";

    for (let i = 0; i < num; i++){
      let e = document.createElement("option");

      e.innerHTML = i + 1;
      e.value = i + 1;

      pageSelect.appendChild(e);
    }
  }

});
