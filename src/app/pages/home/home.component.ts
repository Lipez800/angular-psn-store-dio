import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/gameModel';
import { BackendInterceptor } from 'src/app/services/backend-Interceptor';
import { Data } from 'src/app/services/data';
import { GameService } from 'src/app/services/game.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idsComNomeEImagem = Data; // Armazene os IDs com nome e foto aqui
  modalAberta = false; // Controle para abrir/fechar a janela modal
  idSelecionada: any; // Armazena detalhes da ID selecionada
	listOptions: string[] = [
		"ps01",
		"ps02",
		"ps03",
		"ps04",
		"ps05",
		"ps06",
		"ps07",
		"ps08",
	]

	constructor(private gameService: GameService, private mockData: Data) { }
	listNewGames: Game[] = [];
	listPreSale: Game[] = [];
	listDemos: Game[] = [];
	ngOnInit(): void {
		this.getListPreSaleValue();
		this.getListDemosValue();
		this.getListNewGamesValue();
	}

	getListNewGamesValue(): void {
		this.gameService.getListNewGames().subscribe({
			next: data => {
				this.listNewGames = data;
			},
			error: error => {
				this.listNewGames = this.mockData.games;
			}
		})
	}
	getListPreSaleValue(): void {
		this.gameService.getListPreSale().subscribe({
			next: data => {
				this.listPreSale = data;
			},
			error: error => {
				this.listPreSale = this.mockData.games;
			}
		})
	}
	getListDemosValue(): void {
		this.gameService.getListDemos().subscribe({
			next: data => {
				this.listDemos = data;
			},
			error: error => {
				this.listDemos = this.mockData.games;
			}
		})
		
	}
	  // Método para abrir a janela modal com informações da ID
		abrirModal(id: any) {
			this.idSelecionada = id; // Correção: atribuir o objeto 'id' recebido como argumento
			this.modalAberta = true;
			// Adicione a classe 'modal' ao body quando a modal for aberta
			document.body.classList.add('modal');
	}
	
		// Método para fechar a janela modal
		fecharModal() {
			this.modalAberta = false;
			// Remova a classe 'modal' do body quando a modal for fechada
			document.body.classList.remove('modal');
		}
	}

