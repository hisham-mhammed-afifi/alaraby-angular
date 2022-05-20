import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFactory } from 'src/app/models/ifactory';
import { IMachine } from 'src/app/models/imachine';
import { FactoryService } from 'src/app/services/factory.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css'],
})
export class RecomendedComponent implements OnInit {
  machine!: IMachine | undefined;
  factory!: IFactory | undefined;
  id: string | null = '';

  constructor(
    private machineSrv: MachineService,
    private factorySrv: FactoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.machineSrv.allMachines().subscribe((data) => {
      this.machine = data.find((m) => {
        if (this.id == '1') {
          return m._id === '628787dc0b2f115392f8c1f8';
        }
        if (this.id == '2') {
          return m._id === '628787e60b2f115392f8c1fa';
        }
        if (this.id == '3') {
          return m._id === '628787ec0b2f115392f8c1fc';
        }
        return;
      });

      this.getFactory(this.machine?.factoryId);
    });
  }

  getFactory(id: string | undefined) {
    this.factorySrv.allFactories().subscribe((data) => {
      this.factory = data.find((f) => f._id === id);
    });
  }

  back() {
    this.router.navigateByUrl('/');
  }
}
