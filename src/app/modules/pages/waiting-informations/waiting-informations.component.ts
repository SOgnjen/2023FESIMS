import { Component, OnInit } from '@angular/core';
import { Information } from '../../hospital/model/information.model';
import { InformationService } from '../../hospital/services/information.service';

@Component({
  selector: 'app-waiting-informations',
  templateUrl: './waiting-informations.component.html',
  styleUrls: ['./waiting-informations.component.css'],
})
export class WaitingInformationsComponent implements OnInit {
  waitingInformations: Information[] = [];

  constructor(private informationService: InformationService) {}

  ngOnInit(): void {
    this.loadWaitingInformations();
  }

  loadWaitingInformations(): void {
    this.informationService.getAllWaitingInformation().subscribe(
      (data) => {
        this.waitingInformations = data;
      },
      (error) => {
        console.error('Error loading waiting informations:', error);
      }
    );
  }

  acceptInformation(id: number): void {
    this.informationService.acceptInformation(id).subscribe(
      () => {
        this.loadWaitingInformations(); // Reload waiting informations after accepting
      },
      (error) => {
        console.error('Error accepting information:', error);
      }
    );
  }

  declineInformation(id: number): void {
    this.informationService.declineInformation(id).subscribe(
      () => {
        this.loadWaitingInformations(); // Reload waiting informations after declining
      },
      (error) => {
        console.error('Error declining information:', error);
      }
    );
  }
}
