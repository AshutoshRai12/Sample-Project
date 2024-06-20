import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  publicHeroes=[
    {alterEgo:'Batman',realName:'Bruce Wayne', votes:' 760 votes' , image:'https://i.ibb.co/HP55tkv/batman.jpg'},
    {alterEgo:'Goku',realName:'Kakarotto', votes:' 800 votes' , image:'https://i.ibb.co/s5bd4BX/goku.png'},
    {alterEgo:'Oliver Atton',realName:'Tsubasa Ōzora', votes:' 380 votes' , image:'https://i.ibb.co/kh3ytZg/oliver.jpg'},
    {alterEgo:'Superman',realName:'TClark Joseph Kent', votes:' 290 votes' , image:'https://i.ibb.co/TqvdYyJ/superman.jpg'},
    {alterEgo:'Superman2',realName:'TClark Joseph Kent', votes:' 590 votes' , image:'https://i.ibb.co/kh3ytZg/oliver.jpg'},

  ]

}
