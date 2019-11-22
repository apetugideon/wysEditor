class wysEditor {
  constructor() {
    this.docObj       = null;
    this.docTxt       = false;
    self              = this;
    self.initDoc();
  }

 initDoc() {
    self.docObj = document.getElementById("textBox");
    self.docTxt = self.docObj.innerHTML;
    if (document.getElementById("edmode").value) { self.setDocMode(true); }
 }

 formatDoc(sCmd, sValue) {
   if (self.validateMode()) { document.execCommand(sCmd, false, sValue); self.docObj.focus(); }
 }

 validateMode() {
   if (document.getElementById("edmode").value === "") { return true ; }
   alert("Uncheck \"Show HTML\".");
   self.docObj.focus();
   return false;
 }

 setDocMode(bToSource) {
   var oContent;
   if (bToSource) {
     oContent = document.createTextNode(self.docObj.innerHTML);
     self.docObj.innerHTML = "";
     var oPre = document.createElement("pre");
     self.docObj.contentEditable = false;
     oPre.id = "sourceText";
     oPre.contentEditable = true;
     oPre.appendChild(oContent);
     self.docObj.appendChild(oPre);
     document.execCommand("defaultParagraphSeparator", false, "div");
   } else {
     if (document.all) {
       self.docObj.innerHTML = self.docObj.innerText;
     } else {
       oContent = document.createRange();
       oContent.selectNodeContents(self.docObj.firstChild);
       self.docObj.innerHTML = oContent.toString();
     }
     self.docObj.contentEditable = true;
   }
   self.docObj.focus();
 }
}
