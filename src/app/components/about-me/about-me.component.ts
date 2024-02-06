import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  
  pdfUrl = '../../../assets/resume/Jeyson-Valdivia-resume.pdf';
  openOrDownloadPDF() {
    // Puedes ajustar el nombre del archivo si lo deseas
    const fileName = 'documento.pdf';

    // Crea un enlace temporal
    const link = document.createElement('a');
    
    // Establece el atributo href con la ruta del PDF
    link.href = this.pdfUrl;

    // Establece el atributo download con el nombre del archivo
    link.download = fileName;

    // Crea un clic en el enlace y lo dispara
    link.click();
  }
}
