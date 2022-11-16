import { jsPDF } from "jspdf";
import { Font } from "./font";
import html2canvas from "html2canvas";

const testFunction = () => {
  html2canvas(document.querySelector("#pdfTest")).then((canvas) => {
    let imgData = canvas.toDataURL("image/jpeg");

    let imgWidth = 210;
    let pageHeight = imgWidth * 1.414;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let margin = 20;

    let doc = new jsPDF("p", "mm", "a4");
    let position = 20;

    doc.addImage(imgData, "jpeg", margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 20) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, "jpeg", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    doc.save("sample.pdf");
    alert("done");
  });
};

export const PdfFunction = { testFunction };
