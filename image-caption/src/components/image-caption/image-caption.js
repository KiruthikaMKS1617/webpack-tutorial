import "./image-caption.scss";

class ImageCaption {
  render(text) {
    const p = document.createElement("p");
    p.innerText = text;
    p.classList.add("image-caption");
    document.body.appendChild(p);
  }
}

export default ImageCaption;
