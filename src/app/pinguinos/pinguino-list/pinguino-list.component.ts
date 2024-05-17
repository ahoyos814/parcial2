import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../Pinguino';
import { PinguinoService } from '../pinguino.service';
import { PinguinoDetailComponent } from '../pinguino-detail/pinguino-detail.component';
import { PinguinoDetail } from '../PinguinoDetail';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<PinguinoDetail>  = [];

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }
  
  selectedPinguino!: PinguinoDetail;
  selected: Boolean = false;
  onSelected(pinguino: PinguinoDetail): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  ngOnInit() {
    this.getPinguinos();
  }

}
