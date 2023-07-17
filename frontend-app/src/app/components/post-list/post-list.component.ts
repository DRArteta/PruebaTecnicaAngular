import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  searchTerm: string = ''; // Término de búsqueda
  titulo: string = ''; // Título del modal de notificación
  mensaje: string = ''; // Mensaje del modal de notificación
  currentPage: number = 1; // Página actual
  pageSize: number = 10; // Tamaño de página
  totalPages: number = 0; // Total de páginas
  pages: number[] = []; // Array de números de página
  selectedPost: Post | null = null; // Elemento seleccionado para editar
  posts: Post[] = []; // Lista de posts

  constructor(
    private postService: PostService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchPosts(); // Obtener la lista de posts al inicializar el componente
  }

  editPost(post: Post) {
    // Redirigir a la vista de post-form con los datos del post seleccionado
    this.router.navigate(['/post-form'], { state: { post: post } }).finally();
  }

  fetchPosts() {
    // Obtener la lista de posts desde el servicio y filtrar por término de búsqueda
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.updatePagination(); // Actualizar la paginación después de obtener los posts
    });
  }

  updatePagination() {
    // Calcular el total de páginas y generar el array de números de página
    this.totalPages = Math.ceil(this.posts.length / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  getPaginatedPosts(): Post[] {
    // Obtener los posts de la página actual
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.posts.slice(startIndex, startIndex + this.pageSize);
  }

  deletePost(postId: number) {
    // Eliminar el post mediante el servicio y actualizar la lista de posts
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
      this.openModal('Eliminación exitosa', 'El post fue eliminado con éxito');
    });
  }

  openModal(titulo: string, mensaje: string) {
    // Abrir el modal de notificación con el título y mensaje especificados
    const modalRef = this.modalService.open(NotificationModalComponent, { centered: true });
    modalRef.componentInstance.title = titulo;
    modalRef.componentInstance.message = mensaje;
  }

  goToPage(page: number, event: Event) {
    // Navegar a la página especificada y evitar la acción predeterminada de navegación
    event.preventDefault();
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  navigateToPostForm() {
    // Navegar a la vista de post-form
    this.router.navigate(['/post-form']);
  }
}
