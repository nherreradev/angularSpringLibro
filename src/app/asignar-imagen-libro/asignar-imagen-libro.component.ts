import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asignar-imagen-libro',
  templateUrl: './asignar-imagen-libro.component.html',
  styleUrls: ['./asignar-imagen-libro.component.css']
})
export class AsignarImagenLibroComponent implements OnInit {

  /* esta es la referencia del html */
  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      idLibro: [''],
      imagen: [null]
    })
  }

  ngOnInit() { }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      imagen: file
    });
    this.form.get('imagen').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("idLibro", this.form.get('idLibro').value);
    formData.append("imagen", this.form.get('imagen').value);
  
    this.http.post('http://localhost:8080/libro/imagen', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }


}
