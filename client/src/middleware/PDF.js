import jsPDF from "jspdf";

const MyDoc = props => {
  const {
    firstNameValue,
    lastNameValue,
    personalEmailValue,
    phoneNumberValue,
    bankAcountValue,
    positionValue,
    registredADValue,
    equipmentValue,
    startDateValue,
    nearestBossValue,
    vismaExpenseValue,
    vismaSalaryValue,
    vismaSeveraValue,
    registredSeveraValue,
    commentValue,
    departmentValue
  } = props;
  var doc = new jsPDF();
  doc.setFontSize(18);
  doc.setTextColor(40);
  doc.setFontStyle("normal");
  var resAD = "not registred";
  if (registredADValue === true) {
    resAD = "registred";
  }
  var resSevera = "not registred";
  if (registredSeveraValue === true) {
    resSevera = "registred";
  }

  doc.autoTable({
    head: [["Descpiption", "Content"]],
    body: [
      ["Fornavn", `${firstNameValue}`],
      ["Etternavn", `${lastNameValue}`],
      ["Personal Email", `${personalEmailValue}`],
      ["Phone Number", `${phoneNumberValue}`],
      ["Bank Acount", ` ${bankAcountValue}`],
      ["Nearest Boss", `${nearestBossValue}`],
      ["Department", `${departmentValue}`],
      ["Position Description", `${positionValue}`],
      ["Start Date", `${startDateValue}`],
      ["Equipment", `${equipmentValue}`],
      ["Visma Severa", `${vismaSeveraValue}`],
      ["Visma Expense", `${vismaExpenseValue}`],
      ["Visma Salary", `${vismaSalaryValue}`],
      ["AD", resAD],
      ["Severa Systems", resSevera],
      ["Comments", `${commentValue}`]
    ]
  });

  doc.save("CheckAccessForm.pdf");
};

export default MyDoc;
