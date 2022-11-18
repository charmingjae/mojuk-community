import { jsPDF } from "jspdf";
import { Font } from "./font";
import html2canvas from "html2canvas";
import axios from "axios";

const testFunction = () => {
  html2canvas(document.querySelector("#pdfWrapper")).then((canvas) => {
    let imgData = canvas.toDataURL("image/jpeg");

    let imgWidth = 210;
    let pageHeight = imgWidth * 1.414;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let margin = 0;

    let doc = new jsPDF("p", "mm", "a4");
    let position = 0;

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

const getBasicData = async (
  userID: any,
  basicInfo: any,
  setBasicInfo: any,
  setLoading: any
) => {
  await axios
    .post("http://localhost:8888/api/data/getUserInfo", { userID: userID })
    .then((response) => {
      console.log(response);
      const userName = response.data.userData[0].userName;
      const userPhone = response.data.userData[0].userPhone;
      const userGit = response.data.userData[0].userGit;

      setBasicInfo((basicInfo) => ({ ...basicInfo, userName: userName }));
      setBasicInfo((basicInfo) => ({ ...basicInfo, phone: userPhone }));
      setBasicInfo((basicInfo) => ({ ...basicInfo, github: userGit }));
    });
};

export const PdfFunction = { testFunction, getBasicData };
