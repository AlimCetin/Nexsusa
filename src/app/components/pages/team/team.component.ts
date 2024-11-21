import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }
  teamMembers = [
    { name: 'Evana Doe', role: 'Founder', image: 'assets/images/team/g1.jpg' },
    { name: 'Maria Doe', role: 'Manager', image: 'assets/images/team/g3.jpg' },
    { name: 'Smith Doe', role: 'CEO', image: 'assets/images/team/g2.jpg' },
    { name: 'Leo Doe', role: 'Project Manager', image: 'assets/images/team/g5.jpg' },
    { name: 'Jhon Doe', role: 'Marketing Support', image: 'assets/images/team/g4.jpg' },
    { name: 'Brian Cox', role: 'Agent Management', image: 'assets/images/team/g6.jpg' }
  ];
  ngOnInit(): void {
  }

}
