import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post.model';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Input() formTitle: string = ''; // Título del formulario
  @Input() formSubmitButtonText: string = 'Enviar'; // Texto del botón de envío
  @Input() post: Post = new Post(); // Post actual
  isUpdate = false; // Indicador de si es una actualización o creación

  @Output() formSubmitted: EventEmitter<Post> = new EventEmitter<Post>(); // Evento emitido cuando se envía el formulario

  constructor(
    private router: Router,
    private postService: PostService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    // Comprobar si hay un post en el estado de la ventana
    const state = window.history.state;
    if (state && state.post) {
      this.post = state.post;
      this.formTitle = this.post.title;
      this.isUpdate = true; // Es una actualización
    }
  }

  openModal(titulo: string, mensaje: string) {
    // Abrir el modal de notificación con el título y mensaje especificados
    const modalRef = this.modalService.open(NotificationModalComponent, { centered: true });
    modalRef.componentInstance.title = titulo;
    modalRef.componentInstance.message = mensaje;
  }

  submitForm() {
    const state = window.history.state;
    if (this.isUpdate) {
      // Actualizar el post mediante el servicio y emitir el evento formSubmitted
      this.postService.updatePost(this.post).subscribe(() => {
        this.openModal('Actualización exitosa', 'El post fue actualizado correctamente');
        this.formSubmitted.emit(this.post);
        this.router.navigate(['/posts']);
      });
    } else {
      // Crear el post mediante el servicio y emitir el evento formSubmitted
      this.postService.createPost(this.post).subscribe(() => {
        this.openModal('Creación exitosa', 'El post fue creado correctamente');
        this.formSubmitted.emit(this.post);
        this.router.navigate(['/posts']);
      });
    }
  }
}
