import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  
  pdfUrl = '../../../assets/resume/Jeyson-Valdivia-resume.pdf';
  openOrDownloadPDF() {
    const fileName = 'documento.pdf';
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = fileName;
    link.click();
  }
}
