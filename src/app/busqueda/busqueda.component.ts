import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  identificador: string = '';
  resultado: any;
  error: any;

  constructor(private backendService: BackendService, private snackBar: MatSnackBar) {}

  buscar() {
    this.backendService.buscarInformacion(this.identificador).subscribe(
      (response: any) => { 
        this.resultado = response;
        this.error = null;
      },
      (error: any) => { 
        this.resultado = null;
        if (error.status === 400) {
          this.error = error.error.message;
          this.openSnackBar(this.error, 'Cerrar');
        }
        if (error.status === 404) {
          console.log(error);
          this.error = error.error.detail;
          this.openSnackBar(this.error, 'Cerrar');
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
